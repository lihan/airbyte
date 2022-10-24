"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2423],{84912:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={},l="Google Cloud Storage (GCS)",o={unversionedId:"integrations/destinations/gcs",id:"integrations/destinations/gcs",title:"Google Cloud Storage (GCS)",description:"Overview",source:"@site/../docs/integrations/destinations/gcs.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/gcs",permalink:"/integrations/destinations/gcs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/gcs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Firebolt",permalink:"/integrations/destinations/firebolt"},next:{title:"Google Sheets",permalink:"/integrations/destinations/google-sheets"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Features",id:"features",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Output Schema",id:"output-schema",level:2},{value:"Avro",id:"avro",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Data schema",id:"data-schema",level:4},{value:"CSV",id:"csv",level:3},{value:"JSON Lines (JSONL)",id:"json-lines-jsonl",level:3},{value:"Parquet",id:"parquet",level:3},{value:"Configuration",id:"configuration-2",level:4},{value:"Data schema",id:"data-schema-1",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-storage-gcs"},"Google Cloud Storage (GCS)"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This destination writes data to GCS bucket."),(0,r.kt)("p",null,"The Airbyte GCS destination allows you to sync data to cloud storage buckets. Each stream is written to its own directory under the bucket."),(0,r.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting a specific bucket path is equivalent to having separate namespaces.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GCS Bucket Name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket to sync data into.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GCS Bucket Path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subdirectory under the above bucket to sync the data into.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GCS Region"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/storage/docs/locations"},"here")," for all region codes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HMAC Key Access ID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HMAC key access ID . The access ID for the GCS bucket. When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long. See ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/storage/docs/authentication/hmackeys"},"HMAC key")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HMAC Key Secret"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The corresponding secret for the access ID. It is a 40-character base-64 encoded string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Format"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format specific configuration. See below ",(0,r.kt)("a",{parentName:"td",href:"https://docs.airbyte.com/integrations/destinations/gcs#output-schema"},"for details"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Part Size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Arg to configure a block size. Max allowed blocks by GCS = 10,000, i.e. max stream size = blockSize ","*"," 10,000 blocks.")))),(0,r.kt)("p",null,"Currently, only the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/authentication/hmackeys"},"HMAC key")," is supported. More credential types will be added in the future, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=type%2Fenhancement%2C+needs-triage&template=feature-request.md&title="},"submit an issue")," with your request."),(0,r.kt)("p",null,'Additionally, your bucket must be encrypted using a Google-managed encryption key (this is the default setting when creating a new bucket). We currently do not support buckets using customer-managed encryption keys (CMEK). You can view this setting under the "Configuration" tab of your GCS bucket, in the ',(0,r.kt)("inlineCode",{parentName:"p"},"Encryption type")," row."),(0,r.kt)("p",null,'\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you to provision a dedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,r.kt)("p",null,"The full path of the output data is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<bucket-name>/<sorce-namespace-if-exists>/<stream-name>/<upload-date>-<upload-mills>-<partition-id>.<format-extension>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"testing_bucket/data_output_path/public/users/2021_01_01_1609541171643_0.csv.gz\n\u2191              \u2191                \u2191      \u2191     \u2191          \u2191             \u2191 \u2191\n|              |                |      |     |          |             | format extension\n|              |                |      |     |          |             partition id\n|              |                |      |     |          upload time in millis\n|              |                |      |     upload date in YYYY-MM-DD\n|              |                |      stream name\n|              |                source namespace (if it exists)\n|              bucket path\nbucket name\n")),(0,r.kt)("p",null,"Please note that the stream name may contain a prefix, if it is configured on the connection."),(0,r.kt)("p",null,"The rationales behind this naming pattern are: 1. Each stream has its own directory. 2. The data output files can be sorted by upload time. 3. The upload time composes of a date part and millis part so that it is both readable and unique."),(0,r.kt)("p",null,"A data sync may create multiple files as the output files can be partitioned by size (targeting a size of 200MB compressed or lower) ."),(0,r.kt)("h2",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"Each stream will be outputted to its dedicated directory according to the configuration. The complete datastore of each stream includes all the output files under that directory. You can think of the directory as equivalent of a Table in the database world."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under Full Refresh Sync mode, old output files will be purged before new files are created."),(0,r.kt)("li",{parentName:"ul"},"Under Incremental - Append Sync mode, new output files will be added that only contain the new data.")),(0,r.kt)("h3",{id:"avro"},"Avro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Apache Avro")," serializes data in a compact binary format. Currently, the Airbyte S3 Avro connector always uses the ",(0,r.kt)("a",{parentName:"p",href:"http://avro.apache.org/docs/current/spec.html#binary_encoding"},"binary encoding"),", and assumes that all data records follow the same schema."),(0,r.kt)("h4",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"Here is the available compression codecs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No compression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deflate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 9]"),". Default to 0."),(0,r.kt)("li",{parentName:"ul"},"Level 0: no compression & fastest."),(0,r.kt)("li",{parentName:"ul"},"Level 9: best compression & slowest."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bzip2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xz"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 9]"),". Default to 6."),(0,r.kt)("li",{parentName:"ul"},"Level 0-3 are fast with medium compression."),(0,r.kt)("li",{parentName:"ul"},"Level 4-6 are fairly slow with high compression."),(0,r.kt)("li",{parentName:"ul"},"Level 7-9 are like level 6 but use bigger dictionaries and have higher memory requirements. Unless the uncompressed size of the file exceeds 8 MiB, 16 MiB, or 32 MiB, it is waste of memory to use the presets 7, 8, or 9, respectively."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zstandard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[-5, 22]"),". Default to 3."),(0,r.kt)("li",{parentName:"ul"},"Negative levels are 'fast' modes akin to ",(0,r.kt)("inlineCode",{parentName:"li"},"lz4")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"snappy"),"."),(0,r.kt)("li",{parentName:"ul"},"Levels above 9 are generally for archival purposes."),(0,r.kt)("li",{parentName:"ul"},"Levels above 18 use a lot of memory."))),(0,r.kt)("li",{parentName:"ul"},"Include checksum",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", a checksum will be included in each data block."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snappy"))),(0,r.kt)("h4",{id:"data-schema"},"Data schema"),(0,r.kt)("p",null,"Under the hood, an Airbyte data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,r.kt)("h3",{id:"csv"},"CSV"),(0,r.kt)("p",null,"Like most of the other Airbyte destination connectors, usually the output has three columns: a UUID, an emission timestamp, and the data blob. With the CSV output, it is possible to normalize ","(","flatten",")"," the data blob to multiple columns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Condition"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Always exists"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A uuid assigned by Airbyte to each processed record.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Always exists."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A timestamp representing when the event was pulled from the data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When no normalization ","(","flattening",")"," is needed, all data reside under this column as a json blob."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root level fields"),(0,r.kt)("td",{parentName:"tr",align:"left"},"When root level normalization ","(","flattening",")"," is selected, the root level fields are expanded."),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"For example, given the following json object from a source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": 123,\n  "name": {\n    "first": "John",\n    "last": "Doe"\n  }\n}\n')),(0,r.kt)("p",null,"With no normalization, the output CSV is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_data")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{ "user_id": 123, name: { "first": "John", "last": "Doe" } }'))))),(0,r.kt)("p",null,"With root level normalization, the output CSV is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"user_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"name")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"123"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{ "first": "John", "last": "Doe" }'))))),(0,r.kt)("p",null,"Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ",(0,r.kt)("inlineCode",{parentName:"p"},".csv.gz"),")."),(0,r.kt)("h3",{id:"json-lines-jsonl"},"JSON Lines ","(","JSONL",")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"Json Lines")," is a text format with one JSON per line. Each line has a structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source>"\n}\n')),(0,r.kt)("p",null,"For example, given the following two json objects from a source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"They will be like this in the output file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n')),(0,r.kt)("p",null,"Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ",(0,r.kt)("inlineCode",{parentName:"p"},".jsonl.gz"),")."),(0,r.kt)("h3",{id:"parquet"},"Parquet"),(0,r.kt)("h4",{id:"configuration-2"},"Configuration"),(0,r.kt)("p",null,"The following configuration is available to configure the Parquet output:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compression_codec")),(0,r.kt)("td",{parentName:"tr",align:"center"},"enum"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"UNCOMPRESSED")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Compression algorithm"),". Available candidates are: ",(0,r.kt)("inlineCode",{parentName:"td"},"UNCOMPRESSED"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SNAPPY"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"GZIP"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LZO"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BROTLI"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LZ4"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ZSTD"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"block_size_mb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"128 ","(","MB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Block size ","(","row group size",")")," in MB. This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"max_padding_size_mb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 ","(","MB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Max padding size")," in MB. This is the maximum size allowed as padding to align row groups. This is also the minimum size of a row group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"page_size_kb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1024 ","(","KB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Page size")," in KB. The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dictionary_page_size_kb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1024 ","(","KB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Dictionary Page Size")," in KB. There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dictionary_encoding")),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Dictionary encoding"),". This parameter controls whether dictionary encoding is turned on.")))),(0,r.kt)("p",null,"These parameters are related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ParquetOutputFormat"),". See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.javadoc.io/doc/org.apache.parquet/parquet-hadoop/1.12.0/org/apache/parquet/hadoop/ParquetOutputFormat.html"},"Java doc")," for more details. Also see ",(0,r.kt)("a",{parentName:"p",href:"https://parquet.apache.org/docs/file-format/configurations"},"Parquet documentation")," for their recommended configurations ","(","512 - 1024 MB block size, 8 KB page size",")","."),(0,r.kt)("h4",{id:"data-schema-1"},"Data schema"),(0,r.kt)("p",null,"Under the hood, an Airbyte data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record, and finally the Avro record is outputted to the Parquet format. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allow connections from Airbyte server to your GCS cluster ","(","if they exist in separate VPCs",")","."),(0,r.kt)("li",{parentName:"ol"},"An GCP bucket with credentials ","(","for the COPY strategy",")",".")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill up GCS info",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GCS Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/creating-buckets"},"this")," for instructions on how to create a GCS bucket. The bucket cannot have a retention policy. Set Protection Tools to none or Object versioning."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GCS Bucket Region")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HMAC Key Access ID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys"},"this")," on how to generate an access key. For more information on hmac keys please reference the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/hmackeys"},"GCP docs")),(0,r.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user or service account. This user or account will require the following permissions for the bucket:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"storage.multipartUploads.abort\nstorage.multipartUploads.create\nstorage.objects.create\nstorage.objects.delete\nstorage.objects.get\nstorage.objects.list\n")),"You can set those by going to the permissions tab in the GCS bucket and adding the appropriate the email address of the service account or user and adding the aforementioned permissions."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above access ID."))))),(0,r.kt)("li",{parentName:"ul"},"Make sure your GCS bucket is accessible from the machine running Airbyte. This depends on your networking setup. The easiest way to verify if Airbyte is able to connect to your GCS bucket is via the check connection tool in the UI.")),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17901"},"#","17901")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix logging to GCS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16243"},"#","16243")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix Json to Avro conversion when there is field name clash from combined restrictions (",(0,r.kt)("inlineCode",{parentName:"td"},"anyOf"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"oneOf"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"allOf")," fields)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14801"},"#","14801")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix multiple log bindings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-24"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14114"},"#","14114")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Remove "additionalProperties": false from specs for connectors with staging')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13753"},"#","13753")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecate and remove PART_SIZE_MB fields from connectors based on StreamTransferManager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13483"},"#","13483")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added support for int, long, float data types to Avro/Parquet formats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12820"},"12820")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved 'check' operation performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12578"},"#","12578")),(0,r.kt)("td",{parentName:"tr",align:"left"},"In JSON to Avro conversion, log JSON field values that do not follow Avro schema for debugging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12167"},"#","12167")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add gzip compression option for CSV and JSONL formats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11795"},"#","11795")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix the connection check to verify the provided bucket path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11728"},"#","11728")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Properly clean-up bucket when running OVERWRITE sync mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11499"},"#","11499")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Updated spec and documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11686"},"#","11686")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use serialized buffering strategy to reduce memory consumption; compress CSV and JSONL formats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-12"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"#","10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add JVM flag to exist on OOME.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-12"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10299"},"#","10299")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix connection check to require only the necessary permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-11"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9367"},"#","9367")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Avro & Parquet: support array field with unknown item type; default any improperly typed field to string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9121"},"#","9121")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed check method for GCS mode to verify if all roles assigned to user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"#","8809")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8574"},"#","8574")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added namespace to Avro and Parquet record types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8974"},"#","8974")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Release a new version to ensure there is no excessive logging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-03"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8386"},"#","8386")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add new GCP regions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7732"},"#","7732")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support timestamp in Avro and Parquet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7288"},"#","7288")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support Json ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalProperties"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-12"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/5720"},"#","5720")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added configurable block size for stream. Each stream is limited to 10,000 by GCS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/5296"},"#","5296")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added storing gcsCsvFileLocation property for CSV format. This is used by destination-bigquery ","(","GCS Staging upload type",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-16"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4784"},"#","4329")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release.")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,l(l({ref:e},s),{},{components:a})):n.createElement(u,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);