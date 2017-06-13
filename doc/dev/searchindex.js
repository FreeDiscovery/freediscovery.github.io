Search.setIndex({docnames:["cli","contributing","deployment","examples/REST_categorization","examples/REST_clustering","examples/REST_data_ingestion","examples/REST_duplicate_detection","examples/REST_email_threading","examples/REST_semantic_search","examples/index","examples/python_categorization_interpretation","generated/freediscovery.base._BaseWrapper","generated/freediscovery.categorization.NearestNeighborRanker","generated/freediscovery.categorization._CategorizerWrapper","generated/freediscovery.cluster.ClusterLabels","generated/freediscovery.cluster._ClusteringWrapper","generated/freediscovery.cluster._DendrogramChildren","generated/freediscovery.cluster.utils._binary_linkage2clusters","generated/freediscovery.cluster.utils._merge_clusters","generated/freediscovery.datasets.load_dataset","generated/freediscovery.dupdet.IMatchDuplicates","generated/freediscovery.dupdet.SimhashDuplicates","generated/freediscovery.dupdet._DuplicateDetectionWrapper","generated/freediscovery.email_threading._EmailThreadingWrapper","generated/freediscovery.exceptions.DatasetNotFound","generated/freediscovery.exceptions.InitException","generated/freediscovery.exceptions.ModelNotFound","generated/freediscovery.exceptions.NotFound","generated/freediscovery.exceptions.NotImplementedFD","generated/freediscovery.exceptions.OptionalDependencyMissing","generated/freediscovery.exceptions.WrongParameter","generated/freediscovery.ingestion.DocumentIndex","generated/freediscovery.io.parse_ground_truth_file","generated/freediscovery.io.parse_rcv1_smart_tokens","generated/freediscovery.lsi._LSIWrapper","generated/freediscovery.metrics.f1_same_duplicates_score","generated/freediscovery.metrics.ratio_duplicates_score","generated/freediscovery.metrics.recall_at_k_score","generated/freediscovery.pipeline.PipelineFinder","generated/freediscovery.search.Search","generated/freediscovery.search._SearchWrapper","generated/freediscovery.text.FeatureVectorizer","generated/freediscovery.utils.generate_uuid","generated/freediscovery.utils.setup_model","index","installation_instructions","python_api","rest_api","scaling_benchmarks","user_manual/data_ingestion","user_manual/deployment","user_manual/docker","user_manual/document_similarity","user_manual/index","user_manual/scaling_benchmarks","whats_new"],envversion:51,filenames:["cli.rst","contributing.md","deployment.md","examples/REST_categorization.rst","examples/REST_clustering.rst","examples/REST_data_ingestion.rst","examples/REST_duplicate_detection.rst","examples/REST_email_threading.rst","examples/REST_semantic_search.rst","examples/index.rst","examples/python_categorization_interpretation.rst","generated/freediscovery.base._BaseWrapper.rst","generated/freediscovery.categorization.NearestNeighborRanker.rst","generated/freediscovery.categorization._CategorizerWrapper.rst","generated/freediscovery.cluster.ClusterLabels.rst","generated/freediscovery.cluster._ClusteringWrapper.rst","generated/freediscovery.cluster._DendrogramChildren.rst","generated/freediscovery.cluster.utils._binary_linkage2clusters.rst","generated/freediscovery.cluster.utils._merge_clusters.rst","generated/freediscovery.datasets.load_dataset.rst","generated/freediscovery.dupdet.IMatchDuplicates.rst","generated/freediscovery.dupdet.SimhashDuplicates.rst","generated/freediscovery.dupdet._DuplicateDetectionWrapper.rst","generated/freediscovery.email_threading._EmailThreadingWrapper.rst","generated/freediscovery.exceptions.DatasetNotFound.rst","generated/freediscovery.exceptions.InitException.rst","generated/freediscovery.exceptions.ModelNotFound.rst","generated/freediscovery.exceptions.NotFound.rst","generated/freediscovery.exceptions.NotImplementedFD.rst","generated/freediscovery.exceptions.OptionalDependencyMissing.rst","generated/freediscovery.exceptions.WrongParameter.rst","generated/freediscovery.ingestion.DocumentIndex.rst","generated/freediscovery.io.parse_ground_truth_file.rst","generated/freediscovery.io.parse_rcv1_smart_tokens.rst","generated/freediscovery.lsi._LSIWrapper.rst","generated/freediscovery.metrics.f1_same_duplicates_score.rst","generated/freediscovery.metrics.ratio_duplicates_score.rst","generated/freediscovery.metrics.recall_at_k_score.rst","generated/freediscovery.pipeline.PipelineFinder.rst","generated/freediscovery.search.Search.rst","generated/freediscovery.search._SearchWrapper.rst","generated/freediscovery.text.FeatureVectorizer.rst","generated/freediscovery.utils.generate_uuid.rst","generated/freediscovery.utils.setup_model.rst","index.rst","installation_instructions.md","python_api.rst","rest_api.rst","scaling_benchmarks.rst","user_manual/data_ingestion.md","user_manual/deployment.md","user_manual/docker.md","user_manual/document_similarity.rst","user_manual/index.rst","user_manual/scaling_benchmarks.rst","whats_new.md"],objects:{"":{"--all":[0,6,1,"cmdoption-freediscovery-rm-a"],"--cache-dir":[0,6,1,"cmdoption-freediscovery-show-c"],"--debug":[0,6,1,"cmdoption-freediscovery-run-debug"],"--help":[0,6,1,"cmdoption-freediscovery-show-h"],"--hostname":[0,6,1,"cmdoption-freediscovery-run-hostname"],"--log-file":[0,6,1,"cmdoption-freediscovery-run-log-file"],"--output":[0,6,1,"cmdoption-freediscovery-download-o"],"--port":[0,6,1,"cmdoption-freediscovery-run-p"],"--server":[0,6,1,"cmdoption-freediscovery-run-s"],"--yes":[0,6,1,"cmdoption-freediscovery-run-y"],"-a":[0,6,1,"cmdoption-freediscovery-rm-a"],"-c":[0,6,1,"cmdoption-freediscovery-show-c"],"-h":[0,6,1,"cmdoption-freediscovery-show-h"],"-n":[0,6,1,"cmdoption-freediscovery-run-n"],"-o":[0,6,1,"cmdoption-freediscovery-download-o"],"-p":[0,6,1,"cmdoption-freediscovery-run-p"],"-s":[0,6,1,"cmdoption-freediscovery-run-s"],"-y":[0,6,1,"cmdoption-freediscovery-run-y"],mid:[0,6,1,"cmdoption-freediscovery-show-arg-mid"],name:[0,6,1,"cmdoption-freediscovery-download-arg-name"]},"freediscovery.base":{_BaseWrapper:[11,0,1,""]},"freediscovery.base._BaseWrapper":{"delete":[11,1,1,""],__init__:[11,1,1,""],get_params:[11,1,1,""],list_models:[11,1,1,""]},"freediscovery.categorization":{NearestNeighborRanker:[12,0,1,""],_CategorizerWrapper:[13,0,1,""]},"freediscovery.categorization.NearestNeighborRanker":{__init__:[12,1,1,""],fit:[12,1,1,""],get_params:[12,1,1,""],kneighbors:[12,1,1,""],score:[12,1,1,""],set_params:[12,1,1,""]},"freediscovery.categorization._CategorizerWrapper":{"delete":[13,1,1,""],__init__:[13,1,1,""],fit:[13,1,1,""],get_params:[13,1,1,""],list_models:[13,1,1,""],predict:[13,1,1,""]},"freediscovery.cluster":{ClusterLabels:[14,0,1,""],_ClusteringWrapper:[15,0,1,""],_DendrogramChildren:[16,0,1,""]},"freediscovery.cluster.ClusterLabels":{__init__:[14,1,1,""],predict:[14,1,1,""]},"freediscovery.cluster._ClusteringWrapper":{"delete":[15,1,1,""],__init__:[15,1,1,""],birch:[15,1,1,""],compute_labels:[15,1,1,""],dbscan:[15,1,1,""],get_params:[15,1,1,""],k_means:[15,1,1,""],list_models:[15,1,1,""],scores:[15,1,1,""],ward_hc:[15,1,1,""]},"freediscovery.cluster._DendrogramChildren":{__init__:[16,1,1,""],query:[16,1,1,""]},"freediscovery.cluster.utils":{_binary_linkage2clusters:[17,2,1,""],_merge_clusters:[18,2,1,""]},"freediscovery.datasets":{load_dataset:[19,2,1,""]},"freediscovery.dupdet":{IMatchDuplicates:[20,0,1,""],SimhashDuplicates:[21,0,1,""],_DuplicateDetectionWrapper:[22,0,1,""]},"freediscovery.dupdet.IMatchDuplicates":{__init__:[20,1,1,""],fit:[20,1,1,""],get_params:[20,1,1,""],set_params:[20,1,1,""]},"freediscovery.dupdet.SimhashDuplicates":{__init__:[21,1,1,""],fit:[21,1,1,""],get_index_by_hash:[21,1,1,""],get_params:[21,1,1,""],query:[21,1,1,""],set_params:[21,1,1,""]},"freediscovery.dupdet._DuplicateDetectionWrapper":{"delete":[22,1,1,""],__init__:[22,1,1,""],fit:[22,1,1,""],get_params:[22,1,1,""],list_models:[22,1,1,""],query:[22,1,1,""]},"freediscovery.email_threading":{_EmailThreadingWrapper:[23,0,1,""]},"freediscovery.email_threading._EmailThreadingWrapper":{"delete":[23,1,1,""],__init__:[23,1,1,""],get_params:[23,1,1,""],list_models:[23,1,1,""],thread:[23,1,1,""]},"freediscovery.exceptions":{DatasetNotFound:[24,3,1,""],InitException:[25,3,1,""],ModelNotFound:[26,3,1,""],NotFound:[27,3,1,""],NotImplementedFD:[28,3,1,""],OptionalDependencyMissing:[29,3,1,""],WrongParameter:[30,3,1,""]},"freediscovery.exceptions.DatasetNotFound":{with_traceback:[24,1,1,""]},"freediscovery.exceptions.InitException":{with_traceback:[25,1,1,""]},"freediscovery.exceptions.ModelNotFound":{with_traceback:[26,1,1,""]},"freediscovery.exceptions.NotFound":{with_traceback:[27,1,1,""]},"freediscovery.exceptions.NotImplementedFD":{with_traceback:[28,1,1,""]},"freediscovery.exceptions.OptionalDependencyMissing":{with_traceback:[29,1,1,""]},"freediscovery.exceptions.WrongParameter":{with_traceback:[30,1,1,""]},"freediscovery.ingestion":{DocumentIndex:[31,0,1,""]},"freediscovery.ingestion.DocumentIndex":{__init__:[31,1,1,""],from_folder:[31,4,1,""],from_list:[31,4,1,""],render_dict:[31,1,1,""],render_list:[31,1,1,""],search:[31,1,1,""]},"freediscovery.io":{parse_ground_truth_file:[32,2,1,""],parse_rcv1_smart_tokens:[33,2,1,""]},"freediscovery.lsi":{_LSIWrapper:[34,0,1,""]},"freediscovery.lsi._LSIWrapper":{"delete":[34,1,1,""],__init__:[34,1,1,""],append:[34,1,1,""],fit_transform:[34,1,1,""],get_params:[34,1,1,""],list_models:[34,1,1,""]},"freediscovery.metrics":{f1_same_duplicates_score:[35,2,1,""],ratio_duplicates_score:[36,2,1,""],recall_at_k_score:[37,2,1,""]},"freediscovery.pipeline":{PipelineFinder:[38,0,1,""]},"freediscovery.pipeline.PipelineFinder":{__init__:[38,1,1,""],by_id:[38,4,1,""],clear:[38,1,1,""],copy:[38,1,1,""],data:[38,5,1,""],fromkeys:[38,1,1,""],get:[38,1,1,""],get_path:[38,1,1,""],move_to_end:[38,1,1,""],parent:[38,5,1,""],pop:[38,1,1,""],popitem:[38,1,1,""],setdefault:[38,1,1,""]},"freediscovery.search":{Search:[39,0,1,""],_SearchWrapper:[40,0,1,""]},"freediscovery.search.Search":{__init__:[39,1,1,""],fit:[39,1,1,""],search:[39,1,1,""],search_id:[39,1,1,""]},"freediscovery.search._SearchWrapper":{"delete":[40,1,1,""],__init__:[40,1,1,""],get_params:[40,1,1,""],list_models:[40,1,1,""],search:[40,1,1,""]},"freediscovery.text":{FeatureVectorizer:[41,0,1,""]},"freediscovery.text.FeatureVectorizer":{"delete":[41,1,1,""],__init__:[41,1,1,""],append:[41,1,1,""],db_:[41,5,1,""],filenames_:[41,5,1,""],filenames_abs_:[41,5,1,""],ingest:[41,1,1,""],list_datasets:[41,1,1,""],n_features_:[41,5,1,""],n_samples_:[41,5,1,""],query_features:[41,1,1,""],remove:[41,1,1,""],setup:[41,1,1,""],transform:[41,1,1,""]},"freediscovery.utils":{generate_uuid:[42,2,1,""],setup_model:[43,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","exception","Python exception"],"4":["py","classmethod","Python class method"],"5":["py","attribute","Python attribute"],"6":["std","option","option"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:exception","4":"py:classmethod","5":"py:attribute","6":"std:option"},terms:{"16gb":[2,50],"20_newsgroup":[0,44],"20_newsgroups_3categori":[0,19],"20_newsgroups_micro":0,"20ghz":[48,54],"2xlarg":[2,50],"40a2f9fb98414c26":6,"421c1fe9a2444671":6,"5246e3effde24f6d":4,"5587ad9e86b04b7d":4,"566bbe47d3974676":8,"5c8786840c92431d":3,"695b487161df44d5":7,"77538ed9869243c0":5,"7b8d3f944f784ee8":3,"92838af2dff543a4":4,"9eb39d101e21422d":6,"boolean":[12,20,21,23,41],"break":[3,55],"case":[3,31,52,55],"char":41,"class":[4,11,12,13,14,15,16,20,21,22,23,31,34,37,38,39,40,41,46,55],"default":[0,2,12,13,14,15,19,21,22,23,31,38,39,41,50,55],"export":44,"final":44,"float":[12,15,34,37,41],"function":[16,19,21,44,46],"import":[1,3,4,5,6,7,8,10],"int":[12,13,14,15,17,21,22,31,34,37,39,40,41],"ko\u0142cz":20,"new":[1,34,38,44],"public":55,"return":[0,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,37,38,41,44,55],"true":[2,3,4,5,6,7,12,13,20,21,23,31,38,41,44,50],"try":6,"while":[3,55],For:[1,44,49,52],Near:6,The:[0,1,2,12,13,15,19,20,21,22,41,44,45,47,48,49,50,51,54,55],There:8,These:[9,49],Used:18,__future__:[3,5,6,7,8],__init__:[11,12,13,14,15,16,20,21,22,23,31,34,38,39,40,41],__main__:[3,5,8],__name__:[3,5,8],__traceback__:[24,25,26,27,28,29,30],_basewrapp:34,_build:1,_check_stop_list:41,_make_cmap:10,abil:55,about:0,abov:[2,44,45,49,50],absolut:[38,41,49,51],accept:55,access:[2,50],accommod:55,accord:55,account:4,across:41,act:38,action:51,activ:45,actual:10,adapt:[15,19,55],add:[34,41,46,55],added:[48,54,55],addit:[31,34,44,45,46,49,55],address:4,administr:4,advic:4,affect:[0,12,13],after:[1,37],agg:10,agreement:4,aim:[1,20,44,46,48,52,54],algorithm:[1,3,12,13,15,34,48,52,54],alia:4,all:[0,1,2,9,16,18,19,21,22,38,41,44,45,49,50,55],allow:[2,50,55],alpha:10,also:[0,1,2,13,15,19,22,38,41,45,47,49,50],altern:[1,44],althernait:45,alwai:[49,52],amazon:[2,50],amazonec2:[2,50],ami:[2,50],analyz:[3,4,5,6,41],andplanetari:10,ani:[1,10,12,19,20,21,44],anyon:10,api:[9,20,44,49],append:[3,31,34,41,45,55],appendix:33,appli:15,applic:44,appreci:44,approach:[2,50],appropri:[1,12,41],approxim:[18,48,52,54],appveyor:1,aquilla:4,archiv:[7,19],arg:[3,22],arrai:[12,13,14,15,17,18,21,22,23,34,37,39],array_lik:[20,21],ask:0,associ:[1,49,55],assumpt:49,attempt:[12,47,49],attornei:4,attribut:[38,41],auc:3,authent:51,auto:[12,15,21,22],automat:[1,41,47,49,55],avail:[0,3,4,5,6,7,8],average_precis:3,awai:12,b7d63f774a214f1d:7,backend:[20,22],background:3,backward:55,ball_tre:12,balltre:12,barriola:4,base:[12,41,46],base_path:43,base_url:[3,4,5,6,7,8],basebal:19,baseestim:[13,23,46],bash:51,basic:[2,50],batch:12,batch_id:55,batch_siz:[12,15,55],bath:15,bbb7ec6317b74549:3,befor:[2,15,50],begin:38,being:49,belong:18,below:[1,19,52,55],benchmark:[19,44,53],benefit:44,best:12,better:[3,55],between:[15,17,18,36,44,49,52,55],binari:[3,4,5,6,10,13,15,17,18,22,41,55],binary_sensitivity_analysi:10,birch:[4,15,44],bit:[3,21,22,45],black:4,block:[21,22],bockiu:4,bodi:55,bool:[11,19,31,34,41],bootprint:1,both:[1,12,55],bottom:10,boundari:41,branch:[1,44],branching_factor:[4,15],brazil:4,brokerag:4,bruno:4,brute:[3,12],bsd:44,budget:4,bug:44,build:[2,41,44,50],build_tool:1,built:[0,1,44],by_id:38,cach:0,cache_dir:[0,11,13,15,19,22,23,34,38,40,41],calcul:[3,4,8,14],call:[3,14,41],callabl:41,calo:4,can:[0,1,2,9,10,12,15,19,41,44,45,46,47,49,50,51,52,55],categor:[8,9,19,34,49,52,55],categori:[3,10,12,19,44,55],categorizaiton:3,cb1:10,cc9a272348254a62:8,centroid:[14,15],chang:[1,7],channel:45,charact:41,check:[3,4,5,6,44],checkout:45,checksum:19,child:7,childen:16,children:[4,7,16],choos:[2,50],chowdhuri:20,chunck_siz:13,chunk:13,chunk_siz:[3,4,5,6,13,41],circl:1,clair:4,class_weight:3,classif:[44,49],classifi:[13,23],classmethod:[31,38],claus:44,clean:[3,4,5,6,8],clear:38,clf:10,cli:[0,45],clone:[1,45,51],closest:12,cluster:[6,9,35,36,52,55],cluster_depth:4,cluster_id:[4,17,18,21,22],cluster_indic:15,cluster_label:[4,14,15],cluster_s:4,cluster_similar:4,clustermixin:14,cmap:10,cmod:[13,23],code:[1,3,4,5,6,7,8,9,10,55],collect:[2,6,7,9,19,20,21,22,37,39,49,50],colorbar:10,colorbarbas:10,column:[3,4,8,31],com:[1,2,7,21,22,44,45,50,51],comaintain:7,command:[44,45,49],comment:44,commit:1,committe:4,common:49,comp:[10,19],compat:[15,20,44,46,55],compil:45,complet:[3,44],complex:[1,18,48,54],complexit:[48,54],compon:[12,20,21],comput:[1,3,4,6,12,14,15,16,17,18,19,35,36,44,48,52,54,55],compute_label:15,conda:[44,45],confer:4,config:45,confirm:[0,4],conflict:8,connect:[2,15,50],consid:[6,12,15,41,52],consist:[52,55],construct:[12,49],contain:[2,7,12,19,20,21,31,49,50],content:[31,44],continu:1,contribut:[10,44],copi:[2,38,50],core:[2,12,15,48,50,54],corpu:[41,48,54],correspond:[1,19,20,21,38,39,43,44,49],cosin:[6,12,13,15,39,40,52,55],cosine_norm:[13,52],cosine_similar:[12,52],count:[3,41],coverag:55,cpu:[2,12,48,50,54],creat:[1,2,3,5,8,31,43,44,45,50,51],creation:44,credenti:[2,50],credit:4,cross:[2,13,45,50],csr:[20,21,34],curl:[9,44],current:[7,19,22,41,51],custom:[3,4,5,6,7,8,21,49],cut:41,cv_n_fold:13,cv_score:13,d9bcbe6ca7e34b73:6,dasovich:4,data:[2,3,4,6,7,8,9,10,12,16,20,21,31,34,38,41,50,51,53,55],data_dir:[3,4,5,6,7,8,31,41,44,49],datafram:[3,4,8,31],dataset:[0,3,4,5,6,7,8,10,11,13,15,21,22,23,31,33,34,40,41,44,48,54,55],dataset_definit:[3,4,5,8,11,41],dataset_defint:41,dataset_nam:[3,4,5,6,7,8,48,54],datasetindex:41,date:8,davi:4,davidson:4,db_:41,dbscan:[6,15,48,54],ddata:16,deal:4,debug:0,decid:12,decision_funct:[12,13],decode_head:23,decomposit:[3,4,8,34],deep:[12,20,21],def:[7,12],defin:[2,50],definit:[3,5,8,52],defint:11,deimo:10,delet:[1,3,4,5,6,8,11,13,15,22,23,34,40,41,55],dendogram:16,dendrogram:16,dens:39,depend:[1,12,44],deploy:[44,53],depth:[7,15,55],deriv:4,describ:[1,31,41],descript:[41,52],deseret:4,design:46,detail:[0,41,45,52],detect:[9,15,20,22,41,44,55],determin:[4,18],dev:[31,44],devel:7,develop:[44,45,51],developp:[0,55],dia:7,diagnos:1,dict:[16,19,31,33,41],dictionari:[19,31,38,41],did:3,differ:[8,41,49,52],differnet:[21,22],dimens:[3,4,8,34],dimension:[20,21],dir:[0,31],dir_pattern:[31,41],directori:[0,15,19,22,31,41],disabl:[2,50],discoveri:44,disk:[2,11,50],displai:[3,4,5,6,7,8],distanc:[6,12,15,21,22,48,54],doc:[1,4,10,44,47,55],docker:[44,49,53],docker_run:51,document:[0,2,3,4,6,8,9,10,12,13,15,18,19,20,21,22,23,31,34,37,39,40,41,45,47,48,50,53,55],document_id:[3,4,5,8,10,19,31,33,41,44,49,55],document_id_gener:[19,31,41],doe:[1,38,41],doing:3,domain:52,don:6,donwload:45,download:[2,3,4,5,6,7,8,9,10,19,44,49,50],draft:8,driver:[2,50],drop:31,dsid:[3,4,5,6,7,8,41,55],dsid_dir:31,dtype:3,dual:3,duke:4,dump:5,dup_pair:21,duplic:[9,15,18,20,21,22,35,36,44,49,55],duplicate_detection_exampl:[48,54],dupr:4,e1465f839b644c13:4,each:[5,12,13,17,20,21,49,55],eb3325:4,ec2:[2,50],ect:4,effici:[2,41,50],either:[37,49],element:[17,23,35,38],elif:3,els:[3,38],email:[9,23,44,55],emailpars:11,emb:47,enabl:41,encount:[1,19],end:[6,38],endpoint:55,enforc:55,engin:44,english:[10,41],enpoint:55,enron_develop:4,env:45,environ:[0,45],eps:[15,48,54],equal:[20,52],equival:20,error:[1,31,36,49],esa:4,estim:[12,20,21,44,46,48,54],eta:4,ether:55,etring:4,everi:49,exact:[21,22,52],examin:5,exampl:[1,44,48,52,54],examples_jupyt:9,examples_python:9,except:[6,44,45],exis:41,exisitng:31,exist:[10,11,13,15,22,23,31,34,38,40,44,55],exit:[0,7],exp_var:34,expand_frame_repr:[3,5,8],expect:21,experiment:[48,54],explain:[3,4,8,34],explain_categor:10,explained_vari:[3,4,8],expos:[20,44,47,49,55],ext3:7,extend:[2,46,50],extern:[49,55],extract:[2,3,4,5,6,7,8,13,15,19,22,41,44,49,50,52,55],f50828699bcf43a1:3,fail:7,fals:[2,3,4,5,6,8,11,15,18,19,22,23,31,34,38,41,50,54],far:47,fast:[20,38],faster:55,fd_birch_id:44,fd_cat_id:44,fd_dataset_id:44,fd_id_map:44,fd_lsi_id:44,fe_opt:[4,6],featur:[2,3,4,5,6,7,8,13,15,22,41,44,49,50,52],feature_extract:[10,41],featurevector:11,feb:55,fedora:19,fedora_ml_3k_subset:[0,7,19],feedback:44,feel:[1,44],fetch_20newsgroup:10,few:[46,49],field:[31,49,55],fifo:38,fig:10,figsiz:10,file:[0,2,3,5,7,15,19,22,31,32,41,44,45,50],file_path:[3,4,5,8,31,41,44,49],file_pattern:[31,41],filenam:[3,4,5,6,31,32,41],filenames_:41,filenames_abs_:41,filter:[4,41,55],filter_ratio:10,financi:4,find:[6,10,12,20,21,22,38],finish:3,fit:[10,12,13,20,21,22,39],fit_intercept:3,fit_transform:[10,34],fix:1,flask:0,flat:55,float_format:[3,4,5,6,7,8],focu:44,foder:51,fold:13,folder:[0,2,11,13,23,31,34,38,40,43,49,50,51],follow:[4,5,6,7,9,31,45,48,49,51,54,55],fontsiz:10,footer:10,forc:12,forg:[44,45],fork:1,form:[12,20,21],format:[1,3,4,5,6,7,8,10,33,55],forum:44,found:[6,31,38,46,47,49,52],four:52,free:[1,2,44,50],freediscoveri:[1,2,3,4,5,6,7,8,9,10,46,47,48,49,50,52,54],freediscovery_cache_dir:0,freediscovery_shar:[2,3,4,5,6,50,51],frequenc:[14,15,41,52],frequent:4,fri:4,from:[1,3,4,5,6,7,8,10,11,12,15,19,31,37,38,41,45,46,51,55],from_fold:31,from_list:31,fromkei:38,full:33,fulli:51,further:12,fyi:4,gaillard:4,galleri:[1,3,4,5,6,7,8,9,10],gallup:4,gener:[1,3,4,5,6,7,8,9,10,42,43,52,55],get:[3,4,5,6,7,8,11,12,13,15,16,19,20,21,22,23,34,38,40,41,44,49,55],get_index_by_hash:21,get_param:[11,12,13,15,20,21,22,23,34,40],get_path:38,gif:10,git:[45,51],github:[1,2,21,22,44,45,50,51],given:[14,15,16,17,31,35,36,38,40,41,48,49,54],googl:44,gram:41,graphic:[10,19],grossman:20,ground:[7,19,32,44,49],group:[21,22,23,44,49],group_by_subject:23,groupbi:3,gtc:4,guaranti:4,guid:[2,50],gunicorn:[0,45],haedick:4,handl:55,harri:4,has:7,hash:[2,4,6,21,50,52],hash_func:21,hash_func_nbyt:21,hashingvector:39,have:[8,12,20,21,38,41],header:10,help:[0,1],here:[2,47,50],hexadecim:44,hierarch:15,hierarchi:[16,38,49],higher:41,highest:55,histori:44,home:[3,4,5,6],horizont:10,hostnam:0,hou:4,hour:4,how:[2,19,50],howev:[2,45,49,50,52],htlm:7,htm:33,html:[1,10,47],http:[1,3,4,5,6,7,8,19,21,22,33,44,45,51,55],hub:[2,50],hyvl:4,ident:19,identifi:49,idf:41,ids:[38,55],idx:7,ignor:[14,15,40,41],illustr:[2,3,5,9,50,52],imag:[2,10,50,51],implement:[1,20],improv:55,includ:[1,2,13,15,22,50,52],incom:[2,50],indent:5,index:[3,13,21,23,34,55],indexed_file_path:[31,41],indic:[12,13,15,17,23,41],individi:44,individu:[10,49],infer:34,inform:[0,1,44,49],ingest:[3,8,9,41,51,53,55],inherit:46,init:[3,4,5,6,8,41],initi:[11,51],input:[12,18,40,41,52,55],input_d:[3,4,5,6,8],insid:[2,47,49,50],instal:[0,1,2,6,9,50,51],instanc:[2,31,50],instead:49,instruct:[9,44],int64:3,integ:[37,41,55],integr:1,intel:[48,54],intercept_sc:3,interest:10,interfac:44,intern:[14,49,52,55],internal_id:[5,19,31,39,40,49,55],internal_id_offset:31,interpret:9,intra:41,invers:41,ipynb:[3,4,5,6,7,8,10],isda:4,issu:[1,7,19,44],item:[3,4,5,6,38],iter:34,its:0,itself:15,jaccard:[13,52],jaccard_norm:[13,39,52],jaccard_similar:52,jan:55,jmlr:33,job:12,jobrun_4:[3,4,5,6],join:[3,4,5,6,7,8,10],json:[1,3,4,5,6,7,8,44,47],jupyt:[3,4,5,6,7,8,9,10,44],just:[3,15],jwz:23,k_mean:15,kd_tree:12,kdtree:12,kean:4,keep:[14,15],kei:[3,4,5,6,7,8,31,33,38,41],keyerror:38,kincannon:4,kneighbor:12,know:4,kwarg:3,labanowski:4,label:[4,6,10,14,15,17,35,36,49,55],label_method:15,last:38,latent:34,later:44,latest:[7,38,45,51],latexpdf:1,latter:[12,20,21,49],layer:46,lazili:41,lead:55,leaf:12,leaf_siz:[3,12,15],learn:[13,14,15,20,23,44,46],least:[2,18,50],legal09int:[0,48,54],legal:[2,4,9,19,49,50,52],len:[4,6,18],lesse:4,letter:4,level:1,lewis04a:33,lexicon:[18,20],librari:[4,44],lifo:38,like:[12,13,23,38],line:44,linear_model:10,linearsvc:[3,13],link:17,linkag:17,linux:[1,2,45,50],list:[3,4,5,6,7,8,11,13,14,15,17,19,20,21,22,23,31,34,40,41,44,45,49,55],list_dataset:41,list_model:[11,13,15,22,23,34,40],literatur:41,load:[3,4,5,6,7,8,11,19,38,41],load_model:11,local:[1,51],localhost:[1,3,4,5,6,7,8,44],locat:[1,49],log:[0,48,54],log_fil:0,login:[2,50],logisticregress:[3,10,13,44],lon:4,longer:55,longest:49,look:10,loss:3,low:12,lower:41,lsa:[14,15],lsi:[3,4,6,8,14,39,52,54,55],lsi_compon:[14,15,48,54],lsi_id:[3,4,6,8],lunch:4,lyrl2004_rcv1v2_readm:33,mac:[2,45,50],machin:[2,44,50],made:[41,55],mai:1,mail:[19,44],mailman:7,main:1,make:[0,1,3,18,38,55],malownei:4,manag:[0,4,45],manual:[2,19,44,45,50],map:[3,5,12,20,21,44,49,55],mark:35,marsand:10,master:[1,4,44],match:[6,20,22,48,52,54],math:52,matplotlib:10,matrix:[12,15,17,20,21,39],max:[8,52],max_df:[3,4,5,6,41],max_featur:41,max_it:3,max_n:41,max_result:44,max_result_categori:[44,55],max_tree_depth:[4,15,44],maximum:[7,15,21,22],mccullough:4,mean:[4,15,41,49],mechan:49,meet:4,memori:12,merg:[1,18,55],mespeci:10,messag:[0,24,25,26,27,28,29,30,34,41],message_idx:23,metadata:[3,4,5,6,7,8,19,31,41],method:[3,5,6,8,11,12,13,14,15,16,20,21,22,23,31,34,38,39,40,41,44,48,54,55],metric:[3,13,15,39,40,44,52,55],mid:[0,3,4,6,7,11,13,15,22,23,34,38,40,55],might:[10,41],migrat:4,min:3,min_df:[3,4,5,6,41],min_n:41,min_sampl:15,min_similar:[4,6,44],minibatchkmean:15,miniconda:45,minut:[3,4,5,6,7,8,10],mirari:4,misc:44,ml_output:[13,55],mode:0,model:[0,3,4,6,7,8,11,12,13,14,15,22,23,34,38,39,40,42,43,44,49,55],modifi:55,modul:[44,46],moment:14,mon:4,monitor:3,moon:[10,44],more:[1,2,41,44,50,52,55],most:[12,14,15,41],mount:[2,49,50],move:38,move_to_end:38,mpl:10,mtg:4,much:44,multi:55,multi_class:3,multiprocess:3,muni:4,murmurhash3_int_u32:21,murrai:4,must:[2,13,15,19,22,31,49,50],n_categori:12,n_class:13,n_cluster:[4,15],n_compon:[3,4,6,8,34,54],n_document:4,n_featur:[3,4,5,6,12,18,20,21,41],n_features_:41,n_iter:34,n_job:[3,4,5,6,12,41],n_max_sampl:[6,48,54],n_neighbor:15,n_pair:17,n_rand_lexicon:[6,20,48,54],n_sampl:[3,4,5,6,12,13,14,15,17,18,20,21,23,37,48,54],n_samples_:41,n_samples_process:[3,4,5,6],n_top_word:[4,6,14,15,41],name:[0,3,12,19,20,21,49],natur:12,ndarrai:[13,37,39,41],nearest:[3,8,12,13,15,21,22,44,52],nearest_document_id:3,nearestneighbor:[3,55],nearestneighborrank:13,necessari:[3,44,49,51],need:[8,41,55],neg:[3,12,55],neighbor:[3,8,12,13,15,44,52],neighborhood:15,neighbour:[21,22],nemec:4,nest:[12,20,21,49,55],newsgoup:19,newsgroup:10,ngram_rang:[3,4,5,6,41],nn_ind:13,nn_metric:[52,55],node:[16,38],node_id:16,non:[4,6,41,55],none:[3,4,5,6,11,12,13,14,15,19,20,21,22,23,24,25,26,27,28,29,30,31,34,38,39,40,41],norm:[3,4,5,6,10,41],normal:[4,41],note:[12,45,49,52],notebook:[3,4,5,6,7,8,9,10],nov:4,novemb:4,now:[6,55],npm:1,nrow:3,nthread:7,number:[0,12,13,15,17,20,21,22,34,36,41,48,52,54],numer:49,numpi:44,object:[12,13,14,20,21,23,31,34,55],obtain:[45,51],occast:41,oct:4,octob:7,off:41,offic:4,offset:31,onc:[2,41,50,51],one:[1,2,3,11,12,13,18,19,31,36,50],onli:[0,2,4,6,12,13,14,15,19,31,41,45,49,50,51,55],open:[1,2,10,44,50],openapi:[1,47,55],openapi_doc:1,oper:[39,41,55],optim:[4,12],option:[3,4,5,6,7,8,11,12,13,14,15,20,21,22,23,31,34,39,40,41,44,45,53,55],order:[10,38,41],ordereddict:[33,38],org:33,orient:10,origin:[3,20],other:[44,48,54],otherwis:[0,38],out:[3,4,5,6,7,8,10,31,41],outcom:10,outlook:4,output:[0,1,13,18,39,40,41],overal:55,overrid:12,overwrit:[31,41],ovr:3,packag:[0,44,45],packagekit:7,page:[44,45,48,51,54],pagin:55,pair:38,panda:[3,4,5,6,7,8,31],paper:33,parallel:[2,12,50],param:[12,20,21],paramet:[0,3,4,5,6,11,12,13,14,15,16,17,18,19,20,21,22,23,31,33,34,37,38,39,40,41,48,52,54,55],parent:[23,38],parent_id:[3,4,6,7,8,11,13,15,22,23,34,40,44],pars:[7,32,33],parse_email_head:[3,4,5,6,7,41],parser:55,part:[1,55],parti:4,particular:[33,49,55],pass:[12,41],path:[0,3,4,5,8,10,31,38,41,49,51],pdf:1,pdflatex:1,penalti:3,perform:[4,8,15,34,39,41,44,48,54,55],period:4,permiss:[2,45,50],persist:[46,55],phase:[2,50],phobo:10,pip:[44,45],pipelin:[12,20,21],place:49,planetari:10,platform:[2,6,7,44,45,50],pleas:1,plt:10,point:[12,15,20,21],polit:44,poon:4,pop:[4,38],popitem:38,popul:12,port:[0,2,50],posit:[3,12,52,55],possibl:[12,20,21,45],post:[3,4,5,6,7,8,44,49,55],practic:52,pre:51,prebuild:[2,50],precomput:22,predict:[3,10,12,13,14,23,37,44],predict_proba:10,prefer:[2,10,50],present:15,previous:[3,13],pring:41,print:[0,3,4,5,6,7,8,10,19,34],print_funct:[3,5,6,7,8],print_thread:7,prior:38,privat:55,probabl:[8,13],problem:[1,7,12],procedur:1,process:[2,3,38,41,50,55],prodedur:52,produc:[1,21],progress:[3,4,6,19,34,41],project:4,proport:41,provid:[15,31,38,39,40,41,44,49,55],pull:[1,2,50,51],purpos:[2,50],push:1,py3:7,pyplot:10,python:[0,1,3,4,5,6,7,8,9,44,45,55],python_categorization_interpret:10,queri:[8,12,16,21,22,31,39,40,41,44,54],query_featur:41,quick:9,quickstart:45,quot:10,r0h:19,radiu:[3,12],radius_neighbor:12,rais:[3,31,38],ram:[2,48,50,54],rand_lexicon_ratio:[6,20,48,54],random:20,random_st:3,rang:[12,41,52,55],rank:12,ranker:12,ratio:20,raw:[31,41],rawhid:7,rcv1:33,readm:[9,45],rec:19,recal:[3,37,55],recall_at_20p:3,receiv:[3,4,5,6,7,8],recommend:[13,15,22,45],recomput:49,redhat:7,ref_label:15,refer:[15,20,44],regard:49,regress:[15,22,41],regroup:1,regular:45,rel:[10,13,36],releas:[44,45,51],relev:[13,14,15],remov:[0,10,38,41,55],remove_stop_word:41,renam:[18,55],render:31,render_dict:31,render_list:31,rendering_id:55,rendition_id:[31,41,49,55],reorganis:55,replac:32,report:[0,4,7],repositori:[1,51],repr_proba:10,repres:41,reproduc:45,request:[1,2,3,4,5,6,7,8,50,55],requir:[1,6,12,19,22,44,45,51,52],requirements_extra_pip:1,res:[3,4,5,6,7,8,13,31],resourc:[2,50],respect:51,respons:[5,31,55],rest:[9,44,46,49,55],rest_categor:[3,9],rest_clust:4,rest_data_ingest:[5,49],rest_duplicate_detect:6,rest_email_thread:7,rest_semantic_search:8,result:[10,31,33,38,43,44,49,52],resum:4,retriev:[37,44],return_file_path:31,return_optimal_sampl:4,review:1,reweight:41,rewrit:4,rhl:7,roc:[3,12],roc_auc:[3,13],room:4,root:[19,23],root_idx:23,row:[3,4,5,6,8,20,21],rubust:55,run:[1,2,3,4,5,6,7,8,9,10,12,19,32,41,45,48,50,51,54],run_api:[2,50],s_co:12,s_cosin:52,safe:1,sager:4,same:[15,21,22,35,55],sampl:[4,12,15,17],sample_weight:12,sampling_min_coverag:4,sat:4,satellit:10,save:[0,11,13,15,19,22,23,34,38,40,41,44],scale:[44,52,53,55],sci:[10,19,44],scikit:[13,14,15,20,23,44,46],scipi:[16,34,44],score:[3,8,12,13,15,35,37,52,55],script:[2,3,4,5,6,7,8,9,10,48,50,51,54],search:[9,12,21,22,31,52,55],search_id:39,second:[3,4,5,6,7,8,10],section:[1,2,9,50,55],see:[3,4,5,6,7,8,9,21,22,41,44,45],seek:7,seks:4,select:[19,34,49],self:[12,20,21,24,25,26,27,28,29,30,38],semant:[9,34,39,55],send:44,seomoz:[21,22],separ:[49,55],sequenc:41,server:[0,1,3,4,5,6,7,8,9,47,48,49,54],servic:[1,2,50],set:[2,12,13,15,19,20,21,22,23,24,25,26,27,28,29,30,38,41,49,50],set_index:[3,8],set_label:10,set_param:[12,20,21],set_titl:10,setdefault:38,setup:[2,41,44,45,50,53],sever:44,shackleton:4,shackleton_sara:4,shall:4,shallow:38,shape:[12,13,20,21,23],share:51,shared_fold:[2,50],shash:21,shortli:[48,54],should:[3,11,18,41,45,49],signific:55,simhash:[6,21,22,45,48,54],similar:[4,6,12,13,44,49,53,55],simpl:[12,20,21],simpli:[4,5,6,7],simplifi:[2,50,55],singl:[10,20,21],singular:34,size:[2,12,13,15,17,21,42,50],skip_exampl:6,sklearn:[10,13,23,41,46],sleep:3,slightli:12,smart:33,some:[8,17,31,40,41],sort:55,sort_bi:44,sort_by_kei:23,sort_miss:23,sourc:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],south:4,space:[2,10,12,19,39,44,50,52,55],spars:[12,20,21,34,39],spec:[1,47,55],specif:[41,46,47,55],specifi:[0,4,5,6,7,16,19,32,38,52],speed:12,sphinx:[3,4,5,6,7,8,9,10,47],split:[21,22],sport:19,squar:19,squared_hing:3,stabl:[2,44,45,50,51],start:[0,1,2,3,5,8,9,50],statist:20,statu:[4,6],status_cod:3,step:[9,38,49,55],stereo:10,stochast:34,stop:41,stop_word:[3,4,5,6,10,41],store:[2,12,31,33,43,49,50],str:[11,12,13,14,15,19,21,22,23,31,33,34,38,39,40,41],strang:7,strict:31,strictli:41,string:[12,13,20,21,33,40,41],structur:55,subclust:41,subject:[7,23],sublinear_tf:[3,4,5,6,13,15,22,41],submit:44,subobject:[12,20,21],subplot:10,subplots_adjust:10,subsect:19,subsequ:1,subset:[3,9,10,49],successfulli:44,sucessful:47,sudo:[1,45],suffici:[2,50],suggest:18,suit:[44,45],suitabl:[0,41],sum:6,summar:[48,54],supersed:55,supervis:[12,55],support:[14,19,22,41,49,52,55],sure:[1,18],surfac:10,svd:[3,4,8,34],swagger:47,swap:4,sys:[6,7],system:[7,45],tag:[2,50,51],talk:44,tar:19,target:[3,10,13],target_nam:10,team:4,tell:10,temporari:[2,15,22,41,50],teneo:4,tenet:4,term:[12,15,39,41,52,55],termin:[3,38],test:[3,4,5,6,7,8,12,19,44,45,55],test_set:19,text:[3,6,10,14,33,39,40,44,54],text_9:[3,4,5,6],tfidfvector:[10,39],than:[12,41],thank:10,them:15,thi:[0,1,2,3,6,7,11,12,13,14,15,19,20,21,22,23,31,34,39,40,41,46,48,49,50,52,54,55],those:17,thread:[2,9,23,44,50],threashold:[37,55],threshold:[15,41],through:38,thu:[4,55],tiger:4,time:[3,4,5,6,7,8,10,18,48,54,55],tmp:[11,13,15,19,22,23,34,38,40,41],tmp_dir:10,togeth:[46,49],token:33,tol:3,too:4,tool:44,toolkit:19,top:[10,41,44],total:[3,4,5,6,7,8,10,15,17],tracker:1,train:[0,3,10,11,12,13,15,19,22,23,34,40,49,55],training_scor:[3,44],training_set:[3,19],transact:4,transform:41,travi:1,trec:[2,9,19,48,49,50,54],treclegal09:19,treclegal09_20k_subset:[0,19],treclegal09_2k_subset:[0,3,4,5,6,8,19],treclegal09_37k_subset:[0,19],tree:[12,15,23],truncatedsvd:[14,34,39],truth:[7,19,32,44,49],tue:4,tupl:[21,41],twice:[2,50],two:[1,15,46,52],txt:[1,5,31,44,45],type:[11,12,13,14,15,17,20,21,22,23,31,33,34,37,38,40,44,46],ubuntu:[3,4,5,6],uid:38,uint64:21,uncompress:[48,54],under:[1,2,44,50],unifi:55,union:18,uniqu:[18,38,42,43,49],unlik:7,unprocess:41,unsupervis:[12,55],updat:[4,12,20,21],upper:41,url:[3,4,5,6,7,8,19,55],usag:0,use:[0,4,5,6,7,9,10,12,13,39,40,44,45,49],use_hash:[3,4,5,6,13,15,22,41,54],use_idf:[3,4,5,6,13,15,22,41,54],use_lsi:3,used:[0,2,3,6,8,12,13,14,15,20,21,31,33,39,40,41,44,48,49,50,51,52,54,55],useful:1,user:[31,44,45,49,55],userid:[2,50],uses:49,using:[1,2,6,12,13,20,21,34,39,49,50,55],usvi:4,val:[3,4,5,6],valid:[1,2,13,50],valu:[0,12,20,21,22,33,34,38,41],valueerror:3,variabilti:[3,4,8],variabl:[0,4,5,6,7],varianc:34,vecotor:41,vect:14,vector:[10,14,39,41,44,52,54],vectoris:39,vectorizermixin:14,verbos:[3,19,34,41],veri:[12,44],verifi:19,verify_checksum:19,version:[4,6,38,44,45,51],version_info:7,virtual:45,visual:10,vocabulari:[20,41],vocabulary_:10,volume5:33,wai:[3,52],wait:3,walk:38,want:10,ward:15,ward_hc:15,wed:4,weight:[10,12,15,41],well:[12,20,21,55],were:47,when:[0,2,13,15,21,22,31,32,38,41,49,50,55],where:[0,2,10,11,13,15,19,22,23,34,38,40,41,48,49,50,51,54],whether:[11,41],which:[0,1,2,18,20,21,22,50,55],window:[1,2,6,7,32,45,50],with_traceback:[24,25,26,27,28,29,30],within:49,without:[2,38,45,50],word:[3,4,5,6,10,14,15,41,52],work:[4,12,20,21,41],workd:41,worker:0,workflow:1,worst:12,would:[1,2,44,50],wrapper:[11,40,55],write:10,wrt:12,www:[7,33],x27:10,xeon:[48,54],xgboost:[3,13],xlarg:[2,50],xml_export_cont:[3,4,5,6],y_pred:[3,37],y_train:[13,23],y_true:[3,37],yes:0,you:[1,19],your:[1,2,50],zero:41,zip:9},titles:["Command line interface","Contributing","Deployment options","Categorization Example [REST API]","Clustering Example [REST API]","Data Ingestion Example [REST API]","Duplicate Detection Example [REST API]","Email threading Example [REST API]","Semantic Search Example [REST API]","Examples","Categorization Interpretation Example [Python API]","freediscovery.base._BaseWrapper","freediscovery.categorization.NearestNeighborRanker","freediscovery.categorization._CategorizerWrapper","freediscovery.cluster.ClusterLabels","freediscovery.cluster._ClusteringWrapper","freediscovery.cluster._DendrogramChildren","freediscovery.cluster.utils._binary_linkage2clusters","freediscovery.cluster.utils._merge_clusters","freediscovery.datasets.load_dataset","freediscovery.dupdet.IMatchDuplicates","freediscovery.dupdet.SimhashDuplicates","freediscovery.dupdet._DuplicateDetectionWrapper","freediscovery.email_threading._EmailThreadingWrapper","freediscovery.exceptions.DatasetNotFound","freediscovery.exceptions.InitException","freediscovery.exceptions.ModelNotFound","freediscovery.exceptions.NotFound","freediscovery.exceptions.NotImplementedFD","freediscovery.exceptions.OptionalDependencyMissing","freediscovery.exceptions.WrongParameter","freediscovery.ingestion.DocumentIndex","freediscovery.io.parse_ground_truth_file","freediscovery.io.parse_rcv1_smart_tokens","freediscovery.lsi._LSIWrapper","freediscovery.metrics.f1_same_duplicates_score","freediscovery.metrics.ratio_duplicates_score","freediscovery.metrics.recall_at_k_score","freediscovery.pipeline.PipelineFinder","freediscovery.search.Search","freediscovery.search._SearchWrapper","freediscovery.text.FeatureVectorizer","freediscovery.utils.generate_uuid","freediscovery.utils.setup_model","FreeDiscovery","Installation Instructions","Python API Reference","REST API reference","Scaling Benchmarks","Data ingestion","Deployment options","Docker setup","Document similarity","User Manual","Scaling Benchmarks","Release history"],titleterms:{"new":55,AWS:[2,50],Near:[48,54],_basewrapp:11,_binary_linkage2clust:17,_categorizerwrapp:13,_clusteringwrapp:15,_dendrogramchildren:16,_duplicatedetectionwrapp:22,_emailthreadingwrapp:23,_lsiwrapp:34,_merge_clust:18,_searchwrapp:40,api:[1,3,4,5,6,7,8,10,46,47,55],base:11,benchmark:[48,54],bug:1,build:[1,51],categor:[3,10,12,13,44,46],chang:55,cluster:[4,14,15,16,17,18,44,46],clusterlabel:14,command:0,contain:51,contribut:1,data:[5,44,49],dataset:[19,46,49],datasetnotfound:24,depend:45,deploy:[2,50],detect:[6,46,48,54],develop:[2,50],docker:[2,50,51],document:[1,44,46,49,52,54],documentindex:31,download:[0,45,51],dupdet:[20,21,22],duplic:[6,46,48,54],email:[7,46],email_thread:23,enhanc:55,exampl:[3,4,5,6,7,8,9,10,49],except:[24,25,26,27,28,29,30,46],extract:46,f1_same_duplicates_scor:35,featur:[46,55],featurevector:41,file:49,format:49,freediscoveri:[0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,51],generate_uuid:42,hierarch:44,histori:55,imatchdupl:20,index:[44,49],indic:44,info:0,ingest:[5,31,44,49,54],initexcept:25,instal:[44,45],instruct:45,interfac:0,interpret:10,latent:44,licenc:44,line:0,linux:51,list:0,load_dataset:19,lsi:[34,44],mac:51,manual:53,metric:[35,36,37,46],modelnotfound:26,nearestneighborrank:12,notfound:27,notimplementedfd:28,option:[2,50],optionaldependencymiss:29,parse_ground_truth_fil:32,parse_rcv1_smart_token:33,pipelin:38,pipelinefind:38,preprocess:54,process:49,python:[10,46],quick:44,ratio_duplicates_scor:36,recall_at_k_scor:37,refer:[46,47],releas:55,rest:[1,3,4,5,6,7,8,47],run:[0,44],scale:[48,54],search:[8,39,40,44,46,54],semant:[8,44,46,54],server:[2,44,45,50,51],setup:51,setup_model:43,show:0,simhashdupl:21,similar:52,sphinx:1,start:[44,45,51],submit:1,suit:1,tabl:44,test:1,text:41,thread:[7,46],tool:46,user:53,util:[17,18,42,43],version:55,window:51,wrongparamet:30}})