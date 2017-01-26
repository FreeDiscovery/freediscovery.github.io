"""
Data Ingestion Example [REST API]
---------------------------------

An example illustrating the data ingestion in FreeDiscovery
"""

from __future__ import print_function

import requests
import pandas as pd
import json

pd.options.display.float_format = '{:,.3f}'.format
pd.options.display.expand_frame_repr = False

dataset_name = "treclegal09_2k_subset"     # see list of available datasets

BASE_URL = "http://localhost:5001/api/v0"  # FreeDiscovery server URL

if __name__ == '__main__':

    print(" 0. Load the test dataset")
    url = BASE_URL + '/datasets/{}'.format(dataset_name)
    print(" GET", url)
    res = requests.get(url, json={'return_file_path': True}).json()

    # To use a custom dataset, simply specify the following variables
    seed_document_id = res['seed_document_id']
    seed_y = res['seed_y']
    ground_truth_y = res['ground_truth_y']
    data_dir = res['data_dir']

    # create a custom dataset definition for ingestion
    dataset_definition = []
    for internal_id, fname in zip(res['document_id'], res['file_path']):
        dataset_definition.append({'document_id': internal_id + 10, 
                                  'rendering_id': 0,
                                  'file_path': fname})

    # 1. Ingest a dataset specified by folder path

    print("\n1.a Load dataset and initalize feature extraction")
    url = BASE_URL + '/feature-extraction'
    print(" POST", url)
    res = requests.post(url, json={'dataset_definition': dataset_definition,
                                   'use_hashing': True}).json()

    dsid = res['id']
    print("   => received {}".format(list(res.keys())))
    print("   => dsid = {}".format(dsid))

    print("\n1.b Start feature extraction")

    url = BASE_URL+'/feature-extraction/{}'.format(dsid)
    print(" POST", url)
    res = requests.post(url,)

    # 2. Ingest a dataset specified by a path to each file in the dataset


    print("\n2.a Load dataset and initalize feature extraction")
    url = BASE_URL + '/feature-extraction'
    print(" POST", url)
    res = requests.post(url, json={'dataset_definition': dataset_definition,
                                   'use_hashing': True}).json()

    dsid = res['id']
    print("   => received {}".format(list(res.keys())))
    print("   => dsid = {}".format(dsid))

    print("\n2.b Start feature extraction")

    url = BASE_URL+'/feature-extraction/{}'.format(dsid)
    print(" POST", url)
    res = requests.post(url,)


    print("\n2.d. check the parameters of the extracted features")
    url = BASE_URL + '/feature-extraction/{}'.format(dsid)
    print(' GET', url)
    res = requests.get(url).json()

    print('\n'.join(['     - {}: {}'.format(key, val) for key, val in res.items() \
                                                      if "filenames" not in key]))

    print("\n3. Examine the id mapping\n")

    method = BASE_URL + "/feature-extraction/{}/id-mapping/flat".format(dsid)
    print(' GET', method)
    data = {'internal_id': seed_document_id[:3]}
    print('   DATA:', json.dumps(data))
    res = requests.get(method, data=data).json()

    print(' Response:')
    print('  ', json.dumps(res))

    method = BASE_URL + "/feature-extraction/{}/id-mapping/nested".format(dsid)
    print('\n GET', method)
    data = {'data': [{'internal_id': el} for el in seed_document_id[:3]]}
    print('   DATA', json.dumps(data))
    res = requests.get(method, json=data).json()

    print(' Response:')
    print('  ', json.dumps(res, indent=4))

    # 4. Cleaning
    print("\n5.a Delete the extracted features")
    url = BASE_URL + '/feature-extraction/{}'.format(dsid)
    print(" DELETE", url)
    requests.delete(url)
