Search.setIndex({docnames:["contributing","deployment","examples/categorization_example","examples/categorization_example_python","examples/clustering_example","examples/clustering_example_python","examples/duplicate_detection_example","examples/email_threading_example","examples/index","generated/freediscovery.base.BaseEstimator","generated/freediscovery.categorization.Categorizer","generated/freediscovery.cluster.ClusterLabels","generated/freediscovery.cluster.Clustering","generated/freediscovery.cluster._DendrogramChildren","generated/freediscovery.cluster.utils._binary_linkage2clusters","generated/freediscovery.cluster.utils._merge_clusters","generated/freediscovery.datasets.load_dataset","generated/freediscovery.dupdet.DuplicateDetection","generated/freediscovery.dupdet.IMatchDuplicates","generated/freediscovery.dupdet.SimhashDuplicates","generated/freediscovery.exceptions.DatasetNotFound","generated/freediscovery.exceptions.InitException","generated/freediscovery.exceptions.ModelNotFound","generated/freediscovery.exceptions.NotFound","generated/freediscovery.exceptions.NotImplementedFD","generated/freediscovery.exceptions.OptionalDependencyMissing","generated/freediscovery.exceptions.WrongParameter","generated/freediscovery.io.parse_ground_truth_file","generated/freediscovery.lsi.LSI","generated/freediscovery.metrics.f1_same_duplicates_score","generated/freediscovery.metrics.ratio_duplicates_score","generated/freediscovery.parsers.EmailParser","generated/freediscovery.text.FeatureVectorizer","generated/freediscovery.threading.EmailThreading","generated/freediscovery.utils.generate_uuid","generated/freediscovery.utils.setup_model","index","installation_instructions","python_api","rest_api/categorization_element_delete","rest_api/categorization_element_get","rest_api/categorization_post","rest_api/categorization_predict_post","rest_api/categorization_test_post","rest_api/clustering_birch_post","rest_api/clustering_dbscan_post","rest_api/clustering_hac_post","rest_api/clustering_k_mean_post","rest_api/clustering_model_element_delete","rest_api/clustering_model_element_get","rest_api/dataset_get","rest_api/duplicate_detection_element_get","rest_api/duplicate_detection_post","rest_api/email_parser_delete","rest_api/email_parser_element_get","rest_api/email_parser_get","rest_api/email_parser_index_get","rest_api/email_parser_post","rest_api/email_threading_element_get","rest_api/email_threading_post","rest_api/feature_extraction_delete","rest_api/feature_extraction_element_get","rest_api/feature_extraction_element_post","rest_api/feature_extraction_get","rest_api/feature_extraction_index_get","rest_api/feature_extraction_post","rest_api/index","rest_api/lsi_post","rest_api/lsi_predict_post","rest_api/lsi_test_post","rest_api/metrics_categorization_get","rest_api/metrics_clustering_get","rest_api/metrics_duplicate_detection_get","scaling_benchmarks"],envversion:50,filenames:["contributing.md","deployment.md","examples/categorization_example.rst","examples/categorization_example_python.rst","examples/clustering_example.rst","examples/clustering_example_python.rst","examples/duplicate_detection_example.rst","examples/email_threading_example.rst","examples/index.rst","generated/freediscovery.base.BaseEstimator.rst","generated/freediscovery.categorization.Categorizer.rst","generated/freediscovery.cluster.ClusterLabels.rst","generated/freediscovery.cluster.Clustering.rst","generated/freediscovery.cluster._DendrogramChildren.rst","generated/freediscovery.cluster.utils._binary_linkage2clusters.rst","generated/freediscovery.cluster.utils._merge_clusters.rst","generated/freediscovery.datasets.load_dataset.rst","generated/freediscovery.dupdet.DuplicateDetection.rst","generated/freediscovery.dupdet.IMatchDuplicates.rst","generated/freediscovery.dupdet.SimhashDuplicates.rst","generated/freediscovery.exceptions.DatasetNotFound.rst","generated/freediscovery.exceptions.InitException.rst","generated/freediscovery.exceptions.ModelNotFound.rst","generated/freediscovery.exceptions.NotFound.rst","generated/freediscovery.exceptions.NotImplementedFD.rst","generated/freediscovery.exceptions.OptionalDependencyMissing.rst","generated/freediscovery.exceptions.WrongParameter.rst","generated/freediscovery.io.parse_ground_truth_file.rst","generated/freediscovery.lsi.LSI.rst","generated/freediscovery.metrics.f1_same_duplicates_score.rst","generated/freediscovery.metrics.ratio_duplicates_score.rst","generated/freediscovery.parsers.EmailParser.rst","generated/freediscovery.text.FeatureVectorizer.rst","generated/freediscovery.threading.EmailThreading.rst","generated/freediscovery.utils.generate_uuid.rst","generated/freediscovery.utils.setup_model.rst","index.rst","installation_instructions.md","python_api.rst","rest_api/categorization_element_delete.md","rest_api/categorization_element_get.md","rest_api/categorization_post.md","rest_api/categorization_predict_post.md","rest_api/categorization_test_post.md","rest_api/clustering_birch_post.md","rest_api/clustering_dbscan_post.md","rest_api/clustering_hac_post.md","rest_api/clustering_k_mean_post.md","rest_api/clustering_model_element_delete.md","rest_api/clustering_model_element_get.md","rest_api/dataset_get.md","rest_api/duplicate_detection_element_get.md","rest_api/duplicate_detection_post.md","rest_api/email_parser_delete.md","rest_api/email_parser_element_get.md","rest_api/email_parser_get.md","rest_api/email_parser_index_get.md","rest_api/email_parser_post.md","rest_api/email_threading_element_get.md","rest_api/email_threading_post.md","rest_api/feature_extraction_delete.md","rest_api/feature_extraction_element_get.md","rest_api/feature_extraction_element_post.md","rest_api/feature_extraction_get.md","rest_api/feature_extraction_index_get.md","rest_api/feature_extraction_post.md","rest_api/index.rst","rest_api/lsi_post.md","rest_api/lsi_predict_post.md","rest_api/lsi_test_post.md","rest_api/metrics_categorization_get.md","rest_api/metrics_clustering_get.md","rest_api/metrics_duplicate_detection_get.md","scaling_benchmarks.rst"],objects:{"freediscovery.base":{BaseEstimator:[9,0,1,""]},"freediscovery.base.BaseEstimator":{"delete":[9,1,1,""],__init__:[9,1,1,""],get_params:[9,1,1,""]},"freediscovery.categorization":{Categorizer:[10,0,1,""]},"freediscovery.categorization.Categorizer":{"delete":[10,1,1,""],__init__:[10,1,1,""],get_params:[10,1,1,""],predict:[10,1,1,""],train:[10,1,1,""]},"freediscovery.cluster":{ClusterLabels:[11,0,1,""],Clustering:[12,0,1,""],_DendrogramChildren:[13,0,1,""]},"freediscovery.cluster.ClusterLabels":{__init__:[11,1,1,""],predict:[11,1,1,""]},"freediscovery.cluster.Clustering":{"delete":[12,1,1,""],__init__:[12,1,1,""],birch:[12,1,1,""],compute_labels:[12,1,1,""],dbscan:[12,1,1,""],get_params:[12,1,1,""],k_means:[12,1,1,""],load:[12,1,1,""],scores:[12,1,1,""],ward_hc:[12,1,1,""]},"freediscovery.cluster._DendrogramChildren":{__init__:[13,1,1,""],query:[13,1,1,""]},"freediscovery.cluster.utils":{_binary_linkage2clusters:[14,2,1,""],_merge_clusters:[15,2,1,""]},"freediscovery.datasets":{load_dataset:[16,2,1,""]},"freediscovery.dupdet":{DuplicateDetection:[17,0,1,""],IMatchDuplicates:[18,0,1,""],SimhashDuplicates:[19,0,1,""]},"freediscovery.dupdet.DuplicateDetection":{"delete":[17,1,1,""],__init__:[17,1,1,""],fit:[17,1,1,""],get_params:[17,1,1,""],load:[17,1,1,""],query:[17,1,1,""]},"freediscovery.dupdet.IMatchDuplicates":{__init__:[18,1,1,""],fit:[18,1,1,""],get_params:[18,1,1,""],set_params:[18,1,1,""]},"freediscovery.dupdet.SimhashDuplicates":{__init__:[19,1,1,""],fit:[19,1,1,""],get_index_by_hash:[19,1,1,""],get_params:[19,1,1,""],query:[19,1,1,""],set_params:[19,1,1,""]},"freediscovery.exceptions":{DatasetNotFound:[20,3,1,""],InitException:[21,3,1,""],ModelNotFound:[22,3,1,""],NotFound:[23,3,1,""],NotImplementedFD:[24,3,1,""],OptionalDependencyMissing:[25,3,1,""],WrongParameter:[26,3,1,""]},"freediscovery.io":{parse_ground_truth_file:[27,2,1,""]},"freediscovery.lsi":{LSI:[28,0,1,""]},"freediscovery.lsi.LSI":{"delete":[28,1,1,""],__init__:[28,1,1,""],get_params:[28,1,1,""],load:[28,1,1,""],predict:[28,1,1,""],transform:[28,1,1,""]},"freediscovery.metrics":{f1_same_duplicates_score:[29,2,1,""],ratio_duplicates_score:[30,2,1,""]},"freediscovery.parsers":{EmailParser:[31,0,1,""]},"freediscovery.parsers.EmailParser":{"delete":[31,1,1,""],__init__:[31,1,1,""],get_params:[31,1,1,""],list_datasets:[31,1,1,""],load:[31,1,1,""],n_samples_:[31,4,1,""],search:[31,1,1,""],transform:[31,1,1,""]},"freediscovery.text":{FeatureVectorizer:[32,0,1,""]},"freediscovery.text.FeatureVectorizer":{"delete":[32,1,1,""],__init__:[32,1,1,""],get_params:[32,1,1,""],list_datasets:[32,1,1,""],load:[32,1,1,""],n_samples_:[32,4,1,""],preprocess:[32,1,1,""],query_features:[32,1,1,""],search:[32,1,1,""],transform:[32,1,1,""]},"freediscovery.threading":{EmailThreading:[33,0,1,""]},"freediscovery.threading.EmailThreading":{"delete":[33,1,1,""],__init__:[33,1,1,""],get_params:[33,1,1,""],thread:[33,1,1,""]},"freediscovery.utils":{generate_uuid:[34,2,1,""],setup_model:[35,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:exception","4":"py:attribute"},terms:{"040761cfd3b740609b3bb781cc69e0a9":6,"16gb":1,"20ghz":73,"20k":50,"2xlarg":1,"37k":50,"3c8330a18bf744ae87ac22b63601d7c8":6,"58efbc0f8fa640ef8ca2b225781322a9":4,"7c7ff95a4a8c4d3285b8c038bcddd5a1":2,"7da9c53a26b643f59ae88069e6e0915a":6,"87d79d7a0b0f43908a4feae794e90fc3":4,"9ce64b0919d94a0cb4d6484e6634f347":7,"boolean":[18,19,33],"break":2,"case":2,"char":65,"class":[9,10,11,12,13,17,18,19,28,31,32,33,38,41,68],"default":[1,10,11,12,16,17,19,28,31,32,33,41,44,45,46,47,49,51,52,65],"float":[12,28,41,43,45,51,67,68,69,70,71,72],"function":[13,16,19,36,38,44,46,47,50],"import":[0,2,3,4,5,6,7,37],"int":[3,10,11,12,14,17,19,28,31,32,42,45,49,51,56,61,63,64,68,70,71,72],"ko\u0142cz":18,"new":[36,44],"return":[4,5,10,11,12,13,14,16,17,18,19,28,31,32,33,43],"true":[1,2,3,4,5,6,10,16,18,19,32,33,41,65,67,70,71,72],"while":2,AWS:36,For:36,Near:[6,36],One:52,The:[0,1,10,12,16,17,18,19,36,37,41,44,45,46,47,50,52,65,67,70,71,72,73],There:37,These:8,Use:[70,71,72],Used:15,Using:37,__future__:[2,3,6,7],__init__:[9,10,11,12,13,17,18,19,28,31,32,33],__main__:[2,3],__name__:[2,3],_label:5,_silent:5,_term:5,abov:[1,70,71,72],absolut:37,access:1,accumul:28,accuraci:[2,66],action:37,activ:[8,37],adapt:[12,16,50],add:38,added:73,addit:[36,38],address:[4,5],adjust:71,adjusted_mutual_info:71,adjusted_rand:71,administr:[4,5],after:65,again:16,agglomerativeclust:46,agreement:[4,5],aim:[0,18,36,38,73],algorithm:[0,2,10,11,12,28,41,66,73],alia:5,all:[0,1,8,13,15,17,19,31,32,37,65,70,71,72],allow:[1,66],alreadi:16,also:[0,1,10,12,16,17,41,44,45,46,47,50,52,67],altern:0,amazon:1,amazonec2:1,ami:1,anaconda:0,analyz:[2,3,4,6,32,61,63,65],ani:[16,18,19,36,50,66,70,71,72],api:[0,8,18,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],append:[4,5],appli:[12,44,45,46,47,65],applic:36,appreci:36,approach:1,approxim:[15,73],arang:3,archiv:[3,5,7,16],arg:[2,17],arrai:[4,10,11,12,14,15,17,19,28,31,32,33],array_lik:[18,19],ascend:[4,5],assess:[70,71,72],attribut:[31,32],auc:[2,3,43,70],authent:37,auto:[12,17,19],autom:37,automat:0,avail:[2,3,4,6,7],averag:43,average_precis:[2,3,41,43,68],backend:[17,18],background:2,base:[38,50],base_dir:50,base_path:35,base_url:[2,4,6,7],baseestim:[10,28,33,38],bash:37,basic:1,bat:37,batch_siz:12,bath:12,befor:[1,12,44,45,46,47],belong:15,below:16,benchmark:[16,36],benefit:36,berkelei:5,better:2,between:[0,12,14,15,30,45],binari:[2,3,4,6,10,12,14,15,17,28,32,36,41,44,45,46,47,52,65,67,68],birch:[12,46,47,66],bit:[2,17,19,37,51],block:[17,19],bool:[16,28,31,32,58],boost:41,both:[0,44,46,47],boundari:65,bsd:36,bucket:65,build:[1,36,37,65,66],build_tool:[0,37],built:[0,65],c9e43dcdb32d45aca7bc1e286faa594:4,cach:[12,17,28],cache_dir:[3,5,10,12,16,17,28,31,32,33,50],calcul:[2,11],call:[2,11,70,71,72],calo:5,can:[0,1,8,12,16,36,37,38,44,46,47,50],cat:[3,5],categor:[8,16,28,36,43,50,66],categorizaiton:[2,36],categorization_exampl:[2,8],categorization_example_python:3,categorization_scor:3,ce5fcabc81c74140b042a7fdb710404b:7,centroid:[11,12,28,49],chang:[5,7],charact:65,check:[2,4,6,7],check_cach:3,checksum:16,child:7,childen:13,children:[7,13,49],choos:1,chowdhuri:18,chuck_siz:65,chunck:10,chunck_siz:10,chunk_siz:[2,3,4,6,10,28,32,61,63],class_weight:2,classif:[28,41,65],classifi:[10,33],claus:36,clean:[2,4,6],click:37,clone:37,closest:[28,44],cluster:[6,8,29,30,36,65],cluster_id:[6,14,15,17,19,51],cluster_indic:[11,12],cluster_label:[11,12],cluster_nam:[4,5],cluster_term:[4,49],clustering_exampl:4,clustering_example_python:5,clustermixin:11,cmod:[10,33],code:[2,3,4,5,6,7,8],collect:[1,6,7,8,16,17,18,19,50,57,65],collis:65,column:2,com:[0,1,7,17,19,37],comaintain:7,combin:[70,71,72],command:37,comment:36,commit:0,compani:5,compar:[70,71,72],compat:[12,18,36,38],compil:37,complet:2,complex:[15,73],complexit:73,compon:[18,19],comput:[4,5,6,11,12,13,14,15,28,29,30,31,32,41,66,70,71,72,73],compute_label:[5,12],concurr:65,conda:37,conda_run:37,conda_setup:37,connect:[1,4,5,12,46],consid:[6,12,45],constraint:[4,5],construct:[46,66],contain:[1,7,8,16,18,19],continu:0,contribut:36,conveni:37,copi:1,core:[1,12,45,73],corpu:73,correspond:[0,16,18,19,31,32,35,37],cosin:[6,28],count:[2,65,72],cpu:[1,73],creat:[1,35,37,65],credenti:1,cross:[1,2,10,37,41],csr:[18,19],current:[6,7,16,17,31,32,37,50],custom:[2,3,4,6,7,19],cv_n_fold:10,cv_score:10,data:[1,2,4,6,7,13,18,19,37,41,43,44,45,46,47,49,50,51,52,56,57,58,59,64,65,67,68,69,70,71,72],data_dir:[2,3,4,5,6,7,31,32,50,54,55,57,61,63,65],datafram:[2,4,5],dataset:[2,3,4,5,6,7,10,12,17,19,28,31,32,33,36,41,44,45,46,47,52,54,56,59,61,64,67,73],dataset_id:[2,4,6,7,41,44,45,46,47,52,59,67],dataset_nam:[2,3,4,5,6,7,73],dbscan:[6,12,66,73],ddata:13,decode_head:33,decomposit:[2,28,46,67],decreas:46,deep:[18,19],def:[4,5,7],defin:[1,43,66],delet:[2,4,6,9,10,12,17,28,31,32,33,66],delimit:[43,69],dendogram:13,dendrogram:13,depend:[0,36,70,71,72],deploy:36,deprec:5,depth:7,describ:0,descript:32,design:38,desir:67,detail:[32,70,71,72],detect:[8,12,17,18,36,51,52],determin:[15,41],devel:7,develop:[0,8,36,37],dia:7,dict:[11,13,16,40,59],dictionari:16,did:2,differ:[65,66],differnet:[17,19,51],dimens:[2,28,46,67],dimension:[18,19,67],dimention:[44,46,47],dir_pattern:[31,32],direct:41,directori:[12,16,17,31,32,57,65],disabl:[1,4,6],discoveri:36,disk:[1,31,32],displai:[2,4,5,6,7],distanc:[6,12,17,19,28,45,51,73],distribut:0,doc:0,docker:[8,36],docker_run:37,document:[1,2,4,5,6,10,12,15,16,17,18,19,28,31,32,33,36,41,43,50,57,65,68,69,73],doing:2,don:6,done:61,doubl:37,download:[1,2,3,4,5,6,7,8,16,36,50],driver:1,dsid:[2,3,4,5,6,7,10,12,17,28,31,32,33],dtype:3,dual:2,dup_pair:[19,51],duplic:[8,12,15,17,18,19,29,30,36],duplicate_detection_exampl:[6,73],e3875312369c461688a3310b62f4a6fa:2,e7ebf177d6044a66b8406426cd9441a4:2,e90cf84d53874524b4760fe4660e21f1:6,each:[14,18,19,46],ec2:1,ect:[4,5],edu:[5,36],effici:[1,41],either:8,element:[14,29,33],elif:2,email:[8,31,33,36,53,55,56,58],email_thread:59,email_threading_exampl:7,emailpars:7,ena:5,enabl:65,encod:[7,31,54],encount:[16,50],energi:[4,5],english:[2,3,4,5,6,65],enro:5,enron:[4,5],enron_develop:[4,5],enumer:[4,5],env:[8,37],environ:[8,37],eps:[6,12,45,73],equal:18,equival:18,error:[30,54,61,65],estim:[18,19,38,73],exact:[17,19],exampl:[0,36,73],examples_jupyt:8,examples_python:8,except:36,exis:[31,32],exist:[16,36],exit:[6,7],exp_var:28,expand_frame_repr:2,expect:[19,36],experiment:73,explain:[2,28],explained_vari:[2,67],explor:37,expos:[18,36],ext3:7,extend:[1,38],extract:[1,2,3,4,5,6,10,12,16,17,32,36,41,44,45,46,47,50,52,57,60,63,64,67],f1_same_dupl:72,fail:[7,54,61],fals:[1,2,4,5,6,12,15,16,17,28,31,32,33,44,45,46,47,52,65],fast:18,fe_opt:[2,3,4,6,7],featur:[1,2,4,5,6,10,12,17,28,31,32,36,41,44,45,46,47,52,57,60,63,64,67],feature_extract:32,featurevector:[3,5],fedora:16,fedora_ml_3k_subset:7,fedora_ml_:16,feedback:36,feel:36,few:38,fewer:65,file:[1,2,3,5,7,12,16,17,27,31,32,37,43,50,57,65,69],file_pattern:[31,32],filenam:[2,3,4,5,6,7,27,31,32,54,57,61,65,66,69],filter:2,find:[6,17,18,19],finish:2,first:36,fit:[17,18,19],fit_intercept:2,float_format:[2,4,5,6,7],focu:36,foder:37,fold:[10,41],folder:[1,10,28,33,35,37],follow:[2,3,4,6,7,8,36,37,43,46,50,65,66,69,73],forc:16,form:[18,19],format:[0,2,3,4,5,6,7],found:[6,38],free:[1,36],freediscoveri:[0,1,2,3,4,5,6,7,8,38,66,73],freediscovery_shar:[1,2,4,6,7,37],frequenc:[11,12,49,65],from:[0,2,3,4,5,6,7,12,16,17,28,31,32,37,38,46,50,65,66],fulli:37,galleri:[0,2,3,4,5,6,7,8],gcc:37,gener:[0,2,3,4,5,6,7,8,34,35,46],georgetown:36,get:[2,4,6,7,9,10,12,13,16,17,18,19,28,31,32,33,40,42,49,50,51,54,55,56,58,61,63,64,66,70,71,72],get_index_by_hash:19,get_param:[9,10,12,17,18,19,28,31,32,33],git:37,github:[0,1,17,19,36,37],given:[11,12,13,14,29,30,65,73],gradient:41,gram:65,graph:46,grossman:[18,36],groud:[70,71,72],ground:[7,16,27,50,70,71,72],ground_truth_fil:[2,3,50],ground_truth_filenam:[2,43,69],group:[4,5,17,19,33],group_by_subject:[33,58],groupbi:7,guid:[0,1],haa:5,has:7,hash:[1,4,5,6,19,65],hash_func:19,hash_func_nbyt:19,hashingvector:65,have:[18,19,65],help:9,here:1,hierarch:[4,5,12,66],hierarchi:13,higher:65,hou:[4,5],how:1,howev:[0,1,46],htlm:7,html:0,htree:49,http:[0,2,4,6,7,16,17,19,37,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],hub:1,ids:[31,32],idx:7,idx_r:3,idx_ref:3,ignor:[5,11,12,65],illustr:[1,2,8],imag:[1,37],implement:[0,6,18],includ:[0,1,10,12,17,41,44,45,46,47,52,67],incom:1,index:[2,3,10,19,28,33,36,41,46,66,68],indic:[10,11,12,14,28,31,32,33,41,68],infer:28,info:71,inform:[0,36],ingest:37,inherit:38,init:[2,4,6,32],initi:[9,37,57,66],input:[15,32,57,65],insid:[1,65],instal:[1,8,36,41],instanc:1,instruct:36,integ:[44,46,47],integr:0,intel:73,intercept_sc:2,intern:11,invers:65,ipynb:[2,3,4,5,6,7],is_relev:3,issu:[0,7,16,36,50],istal:41,item:[2,4,6,7],iter:28,itertool:7,itself:[12,45],januari:36,job:65,join:[2,4,6,7],jone:4,json:[2,4,6,7],jupyt:[2,3,4,5,6,7,8],just:[2,12],jwz:33,k_mean:[5,12],keep:[11,12,49],kei:[2,4,6,7,70,71,72],kneighbor:46,label:[4,5,6,11,12,14,29,30,66,70,71,72],label_method:[12,49],labels_:6,lambda:2,languag:66,larger:65,latent:[28,46,66],latest:[7,37],latexpdf:0,latin:[7,31],latter:[18,19],layer:38,leaf_siz:12,learn:[0,10,11,12,18,33,36,38,43],least:[1,15],legal09int:73,legal:[1,8,16,50],len:[2,6,15],less:67,lesse:5,lesser:44,level:0,lexicon:[15,18,51],librari:36,licenc:36,lid:2,like:[10,28,33],linear:41,linearsvc:[2,10,41],link:14,linkag:14,linux:[0,1],list:[0,2,3,4,6,7,11,12,14,16,18,19,31,32,40,42,49,50,51,54,57,61,65,66,68,69,70,71,72],list_dataset:[31,32],load:[2,4,5,6,7,12,16,17,28,31,32,36],load_dataset:[3,5],load_ground_truth:[3,16],local:[0,37],localhost:[0,2,4,6,7],locat:0,log:[54,61,65,73],login:1,logisticregress:[2,10,41],loss:2,lower:65,lsa:[11,12],lsi:[2,4,5,11,44,45,46,47,66],lsi_compon:[4,5,6,11,12,44,45,46,47,73],lunch:4,mac:1,machin:[1,36],made:65,mail:[5,16,36],mailman:7,make:[0,2,15],manag:37,manual:[1,16,50],map:[2,3,18,19],mark:[4,29],master:[4,5],match:[6,17,18,51,52,73],matrix:[12,14,18,19,46],max:[28,65],max_df:[2,4,6,32,65],max_it:2,maximum:[7,12,17,19,45,51,65],mean:[4,5,12,44,46,66,72],mean_duplicates_count:72,measur:71,meetin:4,merg:[15,44],messag:[20,21,22,23,24,25,26,28,31,32,54,61,65],message_idx:33,metadata:[16,50],method:[2,6,9,10,11,12,13,17,18,19,28,31,32,33,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73],metric:36,mid:[2,4,6,7,10,12,17,28,33],migrat:4,min:[2,65],min_df:[2,4,6,32,65],min_sampl:[12,45],minibatchkmean:12,miniconda:37,minut:[2,3,4,5,6,7],model:[2,4,6,7,9,10,11,12,17,28,33,34,35,42,43,49,51,58,66],modul:[36,38],moment:41,mon:4,monitor:2,more:[1,36],most:[11,12,32,49,70,71,72],mount:1,mtg:4,much:36,multi_class:2,multiprocess:2,murmurhash3_int_u32:19,must:[1,10,11,12,17,41,44,45,46,47,52,65,67],mutual:71,n_cluster:[4,5,12,44,46,47],n_compon:[2,28,49,67],n_document:[4,5],n_featur:[2,3,4,5,6,15,18,19,32,61,63,65],n_iter:28,n_job:[2,3,4,6,32,61,63,65],n_leav:49,n_max_sampl:[6,73],n_neighbor:[4,5,12,46],n_pair:14,n_rand_lexicon:[6,18,73],n_sampl:[2,4,6,7,10,11,12,14,15,18,19,28,33,61,63,73],n_samples_:[3,31,32],n_samples_process:[2,4,6,61],n_top_word:[4,5,6,11,12,32,49],name:[16,18,19,43,48,49,50,66,69],nearest:[2,12,17,19,28],nearest_nrel_doc:[2,68],nearest_rel_doc:[2,68],necessari:[2,37],neighbor:[12,46],neighborhood:[12,45],neighbour:[17,19],nemec:4,nest:[18,19,59],ngram_rang:[2,3,4,6,32,61,63,65],node:13,node_id:13,non:[2,4,5,6,28,43,65,69],non_relevant_filenam:[40,69],none:[2,10,11,12,17,18,19,20,21,22,23,24,25,26,28,31,32,33,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],norm:[2,3,4,5,6,32,65],normal:65,note:37,notebook:[2,3,4,5,6,7,8],nov:4,nthread:7,number:[10,12,14,17,18,19,28,30,31,32,44,45,46,47,51,65,67,73],numpi:[3,4,6,7],object:[10,11,18,19,28,33],obtain:[37,44,66],oct:4,octob:7,onc:[1,37],one:[1,2,10,11,15,30],ones:[70,71,72],onli:[1,4,6,11,12,37,44,46,47,49,51,65],open:[1,36],optim:41,option:[2,3,4,5,6,7,10,11,12,17,18,19,28,33,36,37,40,41,44,45,46,47,52,65,67],order:[31,32],origin:18,other:73,otherwis:[28,44],out:[2,3,4,5,6,7],outlook:4,output:[15,67],over:41,overlap:65,ovr:2,packag:[36,37],packagekit:7,page:[36,37,73],panda:[2,4,5,6,7],par:11,parallel:1,param:[18,19,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],paramet:[2,4,6,7,9,10,11,12,13,14,15,16,17,18,19,28,31,32,33,41,46,66,70,71,72,73],parent:33,pars:[7,16,27,31,66],parse_ground_truth_fil:3,parser:[7,36,53,54,55,56,57],part:0,parti:[4,5],particularli:0,path:[16,37,57,65],pdf:0,pdflatex:0,penalti:2,perform:[12,28,73],period:5,permiss:1,persist:38,phase:1,pip:[0,37],pipelin:[18,19],platform:[1,6,7,36,37],point:[12,18,19,45],port:1,posit:[44,46,47],possibl:[0,18,19],post:[2,4,6,7,41,43,44,45,46,47,52,57,59,62,65,66,67,68,69],pre:37,prebuild:1,precis:[2,41,43,68,69,70],precomput:17,pred:[70,71,72],predict:[2,3,10,11,28,33,42,66,70,71,72],prediction_nrel:68,prediction_rel:68,prefer:1,preprocess:[3,5,32],presenc:[70,71,72],present:[12,16],preserv:[31,32],previous:[10,16,28,42],pring:[31,32],print:[2,3,4,5,6,7,16,28],print_funct:[2,3,6,7],print_thread:7,problem:7,procedur:0,process:[1,2,54,65,66],produc:19,product:37,program:66,progress:[2,4,6,16,28,31,32,61],provid:[11,12,31,32,36,44,46,47],pull:[0,1,37],purpos:1,py3:7,python:[0,2,4,6,7,8,36],qualiti:[70,71,72],queri:[13,17,19,28,32,66],query_featur:32,r0h:[16,50],radiu:44,rais:2,ram:[1,73],rand:[51,71],rand_lexicon_ratio:[6,18,73],random:[18,51],random_st:2,rang:[65,67],ratio:[18,51,72],ratio_dupl:72,rawhid:7,read:0,recal:[2,41,43,68,69,70],receiv:[2,4,6,7],recipi:[4,5],recommend:[0,10,12,17,37,41,44,45,46,47,52,67],redhat:7,reduc:46,reduct:[44,46,47],ref_label:12,refer:[12,18,36,65],regress:[12,17,31,32],regroup:0,rel:[10,28,30,31,32,41,57,65,68],releas:[36,37],relev:[2,10,11,12,28,43,49,69],relevant_filenam:[40,69],remov:[16,65],renam:15,replac:[27,65],report:7,repositori:37,repr_clust:[4,5],request:[0,1,2,4,6,7],requir:[0,16,17,37,41,43,44,46,47,50,56,57,64,65,68,69,70,71,72],requirements_conda:[0,37],requirements_extra_pip:0,requirements_pip:37,requirements_pip_:0,requirements_pip_comp:37,res:[2,4,6,7],resourc:[1,66],respect:37,respons:[16,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],rest:[0,8,36,38],result:[12,17,35,65],retriev:[36,66],reweight:65,rewrit:[4,5],rhl:7,ridx:[4,5],roc:[2,3,43,70],roc_auc:[2,3,10,41,43,68,70],root:[16,33],root_idx:33,row:[2,4,5,18,19],run:[0,1,2,3,4,5,6,7,8,16,27,32,37,46,50,65,66,73],run_api:[1,37],run_suit:3,same:[12,17,19,29,45,72],sampl:[12,14,44,45,46],sander:4,save:[10,12,16,17,28,31,32,33],scale:[36,65],scikit:[0,10,11,12,18,33,36,38,43],scipi:13,score:[2,3,10,12,28,29,41,43],script:[0,1,2,3,4,5,6,7,8,37,73],search:[3,17,19,31,32,36],second:[2,3,4,5,6,7],section:[0,1],see:[2,3,4,6,7,9,17,19,32,36,44,46,54,61],seed_filenam:[2,3],seed_i:[2,3],seed_index:[2,3],seed_non_relevant_fil:50,seed_relevant_fil:50,seek:7,select:28,self:[18,19],semant:[28,46,66],send:36,seomoz:[17,19],server:[0,2,4,5,6,7,8,36,54,61,73],servic:[1,4,5,36],set:[1,10,12,17,18,19,28,33,41,44,45,46,47,52,65,67,68],set_param:[18,19],setup:[1,37],shackleto:5,shackleton:4,shall:[4,5],shape:[10,18,19,28,33],share:37,shared_fold:1,shash:19,shortli:73,should:[2,4,6,15,44,65],show:66,shown:[70,71,72],signatur:9,simhash:[6,17,19,51,52,73],similar:6,simpl:[18,19],simpli:[2,3,4,6,7],simplifi:1,simultan:65,singl:[18,19],singular:28,size:[1,10,12,14,19],sklearn:[10,32,33,38,44,65],sleep:2,slower:46,smtp:[4,5],softwar:36,some:[5,14,65],sort_by_kei:33,sort_miss:33,sort_valu:[4,5],sourc:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],space:1,spars:[18,19],specif:38,specifi:[2,3,4,6,7,12,13,17,27,28],sphinx:[0,2,3,4,5,6,7,8],split:[0,17,19],squared_hing:2,stabl:[1,37],start:[0,1,2,8,36,44],statist:18,statu:[4,6,66],status_cod:2,stderr:5,step:[8,37],stochast:28,stop:65,stop_word:[2,3,4,5,6,32,61,63,65],store:[1,35],str:[10,11,12,16,17,19,28,31,32,33,40,41,44,45,46,47,49,50,52,54,55,57,59,61,62,63,65,67,68,69,70,71,72],strang:7,stratifi:41,strictli:[65,67],string:[18,19],subclust:44,subject:[7,33],sublinear:65,sublinear_tf:[2,3,4,6,10,12,17,32,41,44,45,46,47,52,65,67],subobject:[18,19],subset:[8,50],success:[39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],suffici:1,suggest:15,suit:[36,37],sum:[4,5],summar:73,support:[16,17,50,66],sure:15,svd:[2,28,67],svm:41,sys:[6,7],system:[0,6,7],tab:[43,69],tag:[1,37],tana:4,tar:[3,5,16,50],target:[2,10,28,41,68],team:4,temporari:[1,12,17,31,32],teneo:5,tenet:4,term:[4,5,11,12,65],termin:2,tes:5,test:[2,3,4,5,6,7,36,37,66],text:[3,5,6,11,36,65],than:[44,65,67],them:[12,45],thi:[0,1,2,4,5,7,11,12,16,18,19,38,44,45,46,47,50,65,66,73],those:14,thread:[1,8,36,58],threshold:[12,44,65],time:[2,3,4,5,6,7,15,46,73],tmp:[3,10,12,16,17,28,31,32,33],togeth:38,token:65,tol:2,tool:36,toolkit:[16,50],top:36,total:[2,3,4,5,6,7,12,14,45],tracker:0,trade:[4,5],train:[2,3,9,10,12,17,28,33,41,42,68],training_scor:41,transact:5,transacti:4,transform:[3,5,28,31,32],trec:[1,8,16,50,73],treclegal09:[16,50],treclegal09_20k_subset:16,treclegal09_2k_subset:[2,3,4,5,6,16],treclegal09_37k_subset:16,tree:[5,33],truncatedsvd:[11,28],truth:[7,16,27,50,70,71,72],tue:4,tupl:[19,65],twice:1,two:[0,12,37,38,45],txt:[0,2,37],type:[7,9,11,12,14,16,17,18,19,31,32,38,54],uint64:19,uncompress:73,under:[0,1,36],union:15,uniqu:[6,15,34,35,43,69],unlik:7,updat:[18,19],upper:65,url:[2,4,6,7,16,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72],use:[0,2,3,4,6,7,8,10,41,65,66],use_hash:[2,4,5,6,10,12,17,32,41,44,45,46,47,52,65,67],use_idf:[2,3,4,5,6,10,12,17,32,41,44,45,46,47,52,65,67],used:[1,2,10,11,12,18,19,28,36,37,46,49,51,52,65,73],useful:0,userid:1,using:[0,1,2,3,5,6,10,18,19,28,66],util:[3,5],uuid:[3,5],v_measur:71,val:[2,4,6,7],valid:[0,1,2,10,41],valu:[3,17,18,19,28,65,67,70,71,72],valueerror:2,variabilti:2,variabl:[2,3,4,6,7],varianc:28,vect:11,vector:[11,28,31,32],vectorizermixin:11,verbos:[2,16,28,31,32],veri:36,verifi:16,verify_checksum:16,version:[4,6,37],version_info:7,virtual:[5,8,37],vocabulari:[18,51,65],wai:[2,37],wait:2,ward:[4,5,12,44,47,49,66],ward_hc:[4,5,12],warn:[3,5,16,41],web:36,wed:4,weight:[12,32,45,65],well:[18,19],when:[1,12,17,19,27,65],where:[1,10,12,16,17,28,31,32,33,37,73],whether:65,which:[0,1,15,17,18,19],window:[0,1,6,7,8,27,41],without:[1,8,31,32,44,46,47],word:[2,3,4,6,11,12,32,49,65],work:[18,19,31,32],worth:0,would:[0,1,36],www:7,xeon:73,xgboost:[2,10,41],xlarg:1,y_train:[10,33],you:[16,50],your:1,zero:65,zip:8},titles:["Contributing","Deployment options","Categorization Example [REST API]","Categorization Example [Python API]","Clustering Example [REST API]","Clustering Example [Python API]","Duplicate Detection Example [REST API]","Email threading Example [REST API]","Examples","freediscovery.base.BaseEstimator","freediscovery.categorization.Categorizer","freediscovery.cluster.ClusterLabels","freediscovery.cluster.Clustering","freediscovery.cluster._DendrogramChildren","freediscovery.cluster.utils._binary_linkage2clusters","freediscovery.cluster.utils._merge_clusters","freediscovery.datasets.load_dataset","freediscovery.dupdet.DuplicateDetection","freediscovery.dupdet.IMatchDuplicates","freediscovery.dupdet.SimhashDuplicates","freediscovery.exceptions.DatasetNotFound","freediscovery.exceptions.InitException","freediscovery.exceptions.ModelNotFound","freediscovery.exceptions.NotFound","freediscovery.exceptions.NotImplementedFD","freediscovery.exceptions.OptionalDependencyMissing","freediscovery.exceptions.WrongParameter","freediscovery.io.parse_ground_truth_file","freediscovery.lsi.LSI","freediscovery.metrics.f1_same_duplicates_score","freediscovery.metrics.ratio_duplicates_score","freediscovery.parsers.EmailParser","freediscovery.text.FeatureVectorizer","freediscovery.threading.EmailThreading","freediscovery.utils.generate_uuid","freediscovery.utils.setup_model","FreeDiscovery","Installation Instructions","Python API Reference","Delete the categorization model","Load categorization model parameters","Build the categorization ML model","Categorize documents","Test prediction accuracy","Compute clustering (Birch)","Compute clustering (DBSCAN)","Compute clustering (Ward hierarchical)","Compute clustering (K-mean)","Delete a clustering model","Compute cluster labels","Load benchmark dataset","Query duplicates","Compute duplicates","Delete a processed dataset","Load parsed emails","List processed datasets","Query document index for a list of filenames","Load a dataset and parse emails","Query duplicates","Compute email threading","Delete a processed dataset","Load extracted features (and obtain the processing status).","Run feature extraction on a dataset","List processed datasets","Query document index for a list of filenames","Load a dataset and initialize feature extraction","REST API Reference","Build a Latent Semantic Indexing (LSI) model","Predict categorization with LSI","Test categorization with LSI","Extract categorization metrics","Extract clustering metrics","Extract duplicate detection metrics","Scaling Benchmarks"],titleterms:{AWS:1,Near:[66,73],_binary_linkage2clust:14,_dendrogramchildren:13,_merge_clust:15,accuraci:43,api:[2,3,4,5,6,7,38,66],base:9,baseestim:9,benchmark:[50,66,73],birch:44,build:[0,41,67],categor:[2,3,10,38,39,40,41,42,68,69,70],categorizaiton:66,cluster:[4,5,11,12,13,14,15,38,44,45,46,47,48,49,66,71],clusterlabel:11,comput:[44,45,46,47,49,52,59],contain:37,content:36,contribut:0,dataset:[16,38,50,53,55,57,60,62,63,65,66],datasetnotfound:20,dbscan:45,delet:[39,48,53,60],depend:37,deploy:1,detect:[6,38,66,72,73],develop:1,docker:[1,37],document:[0,38,42,56,64,66],download:37,dupdet:[17,18,19],duplic:[6,38,51,52,58,66,72,73],duplicatedetect:17,email:[7,38,54,57,59,66],emailpars:31,emailthread:33,exampl:[2,3,4,5,6,7,8],except:[20,21,22,23,24,25,26,38],extract:[38,61,62,65,66,70,71,72],f1_same_duplicates_scor:29,featur:[38,61,62,65,66],featurevector:32,filenam:[56,64],freediscoveri:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],generate_uuid:34,hierarch:46,imatchdupl:18,index:[56,64,67],indic:36,initexcept:21,initi:65,instal:[0,37],instruct:37,label:49,latent:67,linux:37,list:[55,56,63,64],load:[40,50,54,57,61,65,66],load_dataset:16,lsi:[28,67,68,69],mac:37,mean:47,metric:[29,30,38,66,70,71,72],model:[39,40,41,48,67],modelnotfound:22,notfound:23,notimplementedfd:24,obtain:61,option:1,optionaldependencymiss:25,paramet:40,pars:[54,57],parse_ground_truth_fil:27,parser:[31,38,66],predict:[43,68],process:[53,55,60,61,63],python:[3,5,37,38],queri:[51,56,58,64],ratio_duplicates_scor:30,refer:[38,66],rest:[2,4,6,7,66],run:62,scale:73,semant:67,server:[1,37],setup_model:35,simhashdupl:19,start:37,statu:61,suit:0,tabl:36,test:[0,43,69],text:32,thread:[7,33,38,59,66],tool:38,util:[14,15,34,35],ward:46,window:37,wrongparamet:26}})