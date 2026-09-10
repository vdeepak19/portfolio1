import { useMemo, useState } from "react";
import "./Publications.css";

const publications = [
  {
    "title": "Identifying Lethal Effects and Risk Level Using an Improved Classification Technique",
    "authors": "Deepak V.; Srividdhya P.; Muthumari M.; Shameli R.; Devi S.N.",
    "source": "Proceedings of the 3rd International Conference on Inventive Research in Computing Applications, ICIRCA 2021",
    "year": 2021,
    "type": "Conference paper",
    "citations": 5,
    "doi": "10.1109/ICIRCA51532.2021.9544708",
    "link": "https://doi.org/10.1109/ICIRCA51532.2021.9544708",
    "status": ""
  },
  {
    "title": "Retracted: Image Processing based Improved Face Recognition for Mobile Devices by using Scale-Invariant Feature Transform (2020 International Conference on Inventive Computation Technologies (ICICT) DOI: 10.1109/ICICT48043.2020.10702866)",
    "authors": "Karthikeyan C.; Jabber B.; Deepak V.; Vamsidhar E.",
    "source": "Proceedings of the 5th International Conference on Inventive Computation Technologies, ICICT 2020",
    "year": 2020,
    "type": "Erratum",
    "citations": 0,
    "doi": "10.1109/ICICT48043.2020.9112541",
    "link": "https://doi.org/10.1109/ICICT48043.2020.9112541",
    "status": "Retracted"
  },
  {
    "title": "A novel designing and testing of two - Way wilkinson power divider",
    "authors": "Deepak V.; Iswariya S.",
    "source": "Proceedings of the International Conference on Intelligent Sustainable Systems, ICISS 2019",
    "year": 2019,
    "type": "Conference paper",
    "citations": 5,
    "doi": "10.1109/ISS1.2019.8907969",
    "link": "https://doi.org/10.1109/ISS1.2019.8907969",
    "status": ""
  },
  {
    "title": "Leveraging Internet of Medical Things for Real Time Diagnostics in Smart Healthcare Systems",
    "authors": "Thangaraj S.J.J.; Caleb S.; Shyni M.; Jaffar Sadiq Ali A.; Deepak V.",
    "source": "Proceedings of the 9th International Conference on Inventive Systems and Control, ICISC 2025",
    "year": 2025,
    "type": "Conference paper",
    "citations": 1,
    "doi": "10.1109/ICISC65841.2025.11187809",
    "link": "https://doi.org/10.1109/ICISC65841.2025.11187809",
    "status": ""
  },
  {
    "title": "Enhancing Cloud Storage Security with Intrusion Detection System using CNN and Grey Wolf Optimization Algorithm",
    "authors": "Eswari G.; Monica G.K.; Deepak V.; Sunil K.M.; Kumar B.P.",
    "source": "2nd International Conference on Sustainable Computing and Data Communication Systems, ICSCDS 2023 - Proceedings",
    "year": 2023,
    "type": "Conference paper",
    "citations": 5,
    "doi": "10.1109/ICSCDS56580.2023.10104643",
    "link": "https://doi.org/10.1109/ICSCDS56580.2023.10104643",
    "status": ""
  },
  {
    "title": "An efficient recommendation system for athletic performance optimization by enriched grey wolf optimization",
    "authors": "Deepak V.; Anguraj D.K.; Mantha S.S.",
    "source": "Personal and Ubiquitous Computing",
    "year": 2023,
    "type": "Article",
    "citations": 7,
    "doi": "10.1007/s00779-022-01680-2",
    "link": "https://doi.org/10.1007/s00779-022-01680-2",
    "status": ""
  },
  {
    "title": "User hand gesture recognition in robotics",
    "authors": "Jeejo Vetharaj J.; Selvanayaki S.; Deepak V.",
    "source": "International Journal of Control Theory and Applications",
    "year": 2016,
    "type": "Article",
    "citations": 0,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85007496813&partnerID=40&md5=2842158776bad5bf8d02a284e48a7d52",
    "status": ""
  },
  {
    "title": "An efficient performance analysis using collaborative recommendation system on big data",
    "authors": "Deepak V.; Rajesh Khanna M.; Dhanasekaran K.; Prakash P.G.O.; Babu D.V.",
    "source": "Proceedings of the 5th International Conference on Trends in Electronics and Informatics, ICOEI 2021",
    "year": 2021,
    "type": "Conference paper",
    "citations": 10,
    "doi": "10.1109/ICOEI51242.2021.9452737",
    "link": "https://doi.org/10.1109/ICOEI51242.2021.9452737",
    "status": ""
  },
  {
    "title": "Energy efficient hash table based clustered routing approach in wireless sensor networks",
    "authors": "John Justin Thangaraj S.; Indra E.; Kalyan Kumar G.; Deepak V.; Rajesh Khanna M.",
    "source": "Journal of Green Engineering",
    "year": 2020,
    "type": "Article",
    "citations": 5,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85094160755&partnerID=40&md5=a261f8fc7e1e05173e732c05aaea97e4",
    "status": ""
  },
  {
    "title": "Prediction of Diabetes Mellitus using Ensemble Methods in Machine Learning",
    "authors": "Malarvizhi K.; Sangeetha M.; Deepak V.; Kavikumar C.; Prakash P.S.",
    "source": "15th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2024",
    "year": 2024,
    "type": "Conference paper",
    "citations": 1,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85208815832&partnerID=40&md5=3ce2e4514218b41272446a538615a175",
    "status": ""
  },
  {
    "title": "An Efficient Heterogeneous Framework Technique for Optimizing Energy in Green Cloud Computing",
    "authors": "Deepak V.; Sharmila V.; Radhika M.; Devi S.N.; Thangaraj S.J.J.; Samatha B.",
    "source": "2022 6th International Conference on Trends in Electronics and Informatics, ICOEI 2022 - Proceedings",
    "year": 2022,
    "type": "Conference paper",
    "citations": 1,
    "doi": "10.1109/ICOEI53556.2022.9777237",
    "link": "https://doi.org/10.1109/ICOEI53556.2022.9777237",
    "status": ""
  },
  {
    "title": "Retracted: An Approach of Statement Compression Using Classifier Algorithm with Improved Efficiency (2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC) DOI: 10.1109/ICESC51422.2021.10703336)",
    "authors": "Deepak V.; Sharmila V.; Natarajan B.; Shalini S.; Karthikeyan C.",
    "source": "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    "year": 2021,
    "type": "Erratum",
    "citations": 0,
    "doi": "10.1109/ICESC51422.2021.9532679",
    "link": "https://doi.org/10.1109/ICESC51422.2021.9532679",
    "status": "Retracted"
  },
  {
    "title": "Retraction Notice: An Improved Early Detection Method of Autism Spectrum Anarchy using Euclidean Method (2020 Fourth International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud) (I-SMAC) DOI: 10.1109/I-SMAC49090.2020.9243361)",
    "authors": "Deepak V.; Thangaraj S.J.J.; Khanna M.R.",
    "source": "Proceedings of the 4th International Conference on IoT in Social, Mobile, Analytics and Cloud, ISMAC 2020",
    "year": 2020,
    "type": "Retracted",
    "citations": 0,
    "doi": "10.1109/I-SMAC49090.2020.11475156",
    "link": "https://doi.org/10.1109/I-SMAC49090.2020.11475156",
    "status": "Retracted"
  },
  {
    "title": "Label Free Bio-detection using di-electrically modulated pocket doped drain engineered ferro-electric gate tunnel FET",
    "authors": "Meriga S.; Chowdary M.K.; Bhowmick B.; Ganesh C.; Deepak V.",
    "source": "Applied Physics A: Materials Science and Processing",
    "year": 2026,
    "type": "Article",
    "citations": 1,
    "doi": "10.1007/s00339-025-09218-y",
    "link": "https://doi.org/10.1007/s00339-025-09218-y",
    "status": ""
  },
  {
    "title": "Effective Disaster Management Through Transformer-Based Multimodal Tweet Classification",
    "authors": "JayaLakshmi G.; Madhuri A.; Vasudevan D.; Thati B.; Sirisha U.; Praveen S.P.",
    "source": "Revue d'Intelligence Artificielle",
    "year": 2023,
    "type": "Article",
    "citations": 16,
    "doi": "10.18280/ria.370519",
    "link": "https://doi.org/10.18280/ria.370519",
    "status": ""
  },
  {
    "title": "Enhanced Route Selection (ERS) algorithm for IoT enabled smart waste management system",
    "authors": "Nidhya R.; Kumar M.; V. Ravi R.; Deepak V.",
    "source": "Environmental Technology and Innovation",
    "year": 2020,
    "type": "Article",
    "citations": 41,
    "doi": "10.1016/j.eti.2020.101116",
    "link": "https://doi.org/10.1016/j.eti.2020.101116",
    "status": ""
  },
  {
    "title": "SmartNano: Data-Intelligent Modeling of Macrobrachium rosenbergii Chitosan Nanoparticles for Predictive Antibacterial Analysis",
    "authors": "Thangaraj S.J.J.; Vijayakumar D.; Deepak V.",
    "source": "1st International Conference on Intelligent Computing, Networks and Security, IC-ICNS 2026",
    "year": 2026,
    "type": "Conference paper",
    "citations": 0,
    "doi": "10.1109/IC-ICNS68863.2026.11537778",
    "link": "https://doi.org/10.1109/IC-ICNS68863.2026.11537778",
    "status": ""
  },
  {
    "title": "Design of Internet Product Interface Based on Dynamic Model",
    "authors": "Thangaraj S.J.J.; Vimal V.R.; Afreen Banu E.; Loganayagi S.; Deepak V.; Angel Rani J.P.",
    "source": "2023 2nd International Conference on Smart Technologies for Smart Nation, SmartTechCon 2023",
    "year": 2023,
    "type": "Conference paper",
    "citations": 20,
    "doi": "10.1109/SmartTechCon57526.2023.10391733",
    "link": "https://doi.org/10.1109/SmartTechCon57526.2023.10391733",
    "status": ""
  },
  {
    "title": "An improved early detection method of autism spectrum anarchy using euclidean method",
    "authors": "Deepak V.; John Justin Thangaraj S.; Rajesh Khanna M.",
    "source": "Proceedings of the 4th International Conference on IoT in Social, Mobile, Analytics and Cloud, ISMAC 2020",
    "year": 2020,
    "type": "Retracted",
    "citations": 19,
    "doi": "10.1109/I-SMAC49090.2020.9243361",
    "link": "https://doi.org/10.1109/I-SMAC49090.2020.9243361",
    "status": "Retracted"
  },
  {
    "title": "A Novel System to Recognize Human Gaits by Using Intelligent Learning Assisted Feature Analysis Scheme",
    "authors": "Kiran A.; Kumar D.P.; Edpuganti S.K.; Babu P.V.; Sane A.R.; Deepak V.",
    "source": "4th International Conference on Power, Energy, Control and Transmission Systems: Harnessing Power and Energy for an Affordable Electrification of India, ICPECTS 2024",
    "year": 2024,
    "type": "Conference paper",
    "citations": 1,
    "doi": "10.1109/ICPECTS62210.2024.10780000",
    "link": "https://doi.org/10.1109/ICPECTS62210.2024.10780000",
    "status": ""
  },
  {
    "title": "Requirements Identification on Automated Medical Care with Appropriate Machine Learning Techniques",
    "authors": "Balajee R.M.; Mohapatra H.; Deepak V.; Babu D.V.",
    "source": "Proceedings of the 6th International Conference on Inventive Computation Technologies, ICICT 2021",
    "year": 2021,
    "type": "Conference paper",
    "citations": 27,
    "doi": "10.1109/ICICT50816.2021.9358683",
    "link": "https://doi.org/10.1109/ICICT50816.2021.9358683",
    "status": ""
  },
  {
    "title": "A proficient recommendation system for athletes utilizing an adaptive learning model integrated with wearable IoT devices; [Un sistema de recomendación competente para atletas que utiliza un modelo de aprendizaje adaptativo integrado con dispositivos IoT portátiles]",
    "authors": "Deepak V.; Shiny X.S.A.; Dakshinamurthi V.; Thangaraj S.J.J.; Anguraj D.K.",
    "source": "Data and Metadata",
    "year": 2025,
    "type": "Article",
    "citations": 0,
    "doi": "10.56294/dm2025851",
    "link": "https://doi.org/10.56294/dm2025851",
    "status": ""
  },
  {
    "title": "Computerized control of cement roof manufacturing process using PLC and SCADA",
    "authors": "Sivaranjani T.; Indirapriyadharshini J.; Amarendra K.; Deepak V.; Murugan G.; Theerthana T.",
    "source": "International Journal of Advanced Science and Technology",
    "year": 2020,
    "type": "Article",
    "citations": 2,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85084232616&partnerID=40&md5=4dab203302630a65a7784ac180b81b02",
    "status": ""
  },
  {
    "title": "Shot-Level Semantic Reward-based Self-Attentional Network for Unsupervised Video Summarization",
    "authors": "Harish B.; Natarajan B.; Elakkiya R.; Annamalai R.; Bhuvaneswari R.; Deepak V.",
    "source": "Proceedings of IEEE 2023 5th International Conference on Advances in Electronics, Computers and Communications, ICAECC 2023",
    "year": 2023,
    "type": "Conference paper",
    "citations": 2,
    "doi": "10.1109/ICAECC59324.2023.10560142",
    "link": "https://doi.org/10.1109/ICAECC59324.2023.10560142",
    "status": ""
  },
  {
    "title": "Recurrent neural network based recommendation system for marathoner’s motivation",
    "authors": "Deepak V.; Anguraj D.K.; Mantha S.S.",
    "source": "International Journal of System Assurance Engineering and Management",
    "year": 2022,
    "type": "Article",
    "citations": 2,
    "doi": "10.1007/s13198-022-01700-7",
    "link": "https://doi.org/10.1007/s13198-022-01700-7",
    "status": ""
  },
  {
    "title": "Cascade network based multitask perspective designing agribot",
    "authors": "Deepak V.; Narmatha P.; Parameswaran S.; Sukumar P.",
    "source": "Journal of Critical Reviews",
    "year": 2019,
    "type": "Article",
    "citations": 1,
    "doi": "10.22159/jcr.06.06.53",
    "link": "https://doi.org/10.22159/jcr.06.06.53",
    "status": ""
  },
  {
    "title": "Explainable AI for Early Prediction of Oral Cancer using Federated Deep Learning Framework",
    "authors": "Banupriya V.; Deepak V.; Farrisu Deen M.H.; Pradeep N.S.; Sachin S.S.",
    "source": "Proceedings of 3rd International Conference on Machine Learning and Autonomous Systems, ICMLAS 2026",
    "year": 2026,
    "type": "Conference paper",
    "citations": 0,
    "doi": "10.1109/ICMLAS67792.2026.11483982",
    "link": "https://doi.org/10.1109/ICMLAS67792.2026.11483982",
    "status": ""
  },
  {
    "title": "Provisioning an Efficient Recommender System to Measure the Players Activities Using Machine Learning Approaches",
    "authors": "Deepak V.; Anguraj D.K.",
    "source": "International Journal of Reliability, Quality and Safety Engineering",
    "year": 2023,
    "type": "Article",
    "citations": 1,
    "doi": "10.1142/S021853932350016X",
    "link": "https://doi.org/10.1142/S021853932350016X",
    "status": ""
  },
  {
    "title": "Design and Deployment of the Road Safety System in Vehicular Network Based on a Distance and Speed",
    "authors": "Syamsundararao T.; Samatha B.; Karyemsetty N.; Gogulamudi S.; Deepak V.",
    "source": "Smart Innovation, Systems and Technologies",
    "year": 2023,
    "type": "Conference paper",
    "citations": 0,
    "doi": "10.1007/978-981-19-4162-7_18",
    "link": "https://doi.org/10.1007/978-981-19-4162-7_18",
    "status": ""
  },
  {
    "title": "Neuro-SpikeNet: Optimized Spiking Graph and Knowledge-Aware Networks for High-Precision EEG-Based Alzheimer’s Diagnosis",
    "authors": "Kumar T.R.; Arunachalam K.P.; Deepak V.; Muniyandy E.",
    "source": "Biomedical Materials and Devices",
    "year": 2026,
    "type": "Article",
    "citations": 0,
    "doi": "10.1007/s44174-025-00631-8",
    "link": "https://doi.org/10.1007/s44174-025-00631-8",
    "status": ""
  },
  {
    "title": "Correction to: An efficient recommendation system for athletic performance optimization by enriched grey wolf optimization (Personal and Ubiquitous Computing, (2023), 27, 3, (1015-1026), 10.1007/s00779-022-01680-2)",
    "authors": "Deepak V.; Anguraj D.K.; Mantha S.S.",
    "source": "Personal and Ubiquitous Computing",
    "year": 2023,
    "type": "Erratum",
    "citations": 1,
    "doi": "10.1007/s00779-022-01683-z",
    "link": "https://doi.org/10.1007/s00779-022-01683-z",
    "status": "Erratum"
  },
  {
    "title": "An Approach of Statement Compression Using Classifier Algorithm with Improved Efficiency",
    "authors": "Deepak V.; Sharmila V.; Natarajan B.; Shalini S.; Karthikeyan C.",
    "source": "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    "year": 2021,
    "type": "Conference paper",
    "citations": 2,
    "doi": "10.1109/ICESC51422.2021.9532679",
    "link": "https://doi.org/10.1109/ICESC51422.2021.9532679",
    "status": ""
  },
  {
    "title": "Image Processing based Improved Face Recognition for Mobile Devices by using Scale-Invariant Feature Transform",
    "authors": "Karthikeyan C.; Jabber B.; Deepak V.; Vamsidhar E.",
    "source": "Proceedings of the 5th International Conference on Inventive Computation Technologies, ICICT 2020",
    "year": 2020,
    "type": "Conference paper",
    "citations": 12,
    "doi": "10.1109/ICICT48043.2020.9112541",
    "link": "https://doi.org/10.1109/ICICT48043.2020.9112541",
    "status": ""
  },
  {
    "title": "SMART AND MULTI-WAY ATTENDANCE TRACKING SYSTEM USING AN IMAGE-PROCESSING TECHNIQUE",
    "authors": "Muthumari M.; Akash V.; Prudhvi Charan K.; Akhil P.; Deepak V.; Phani Praveen S.",
    "source": "Proceedings - 4th International Conference on Smart Systems and Inventive Technology, ICSSIT 2022",
    "year": 2022,
    "type": "Conference paper",
    "citations": 13,
    "doi": "10.1109/ICSSIT53264.2022.9716349",
    "link": "https://doi.org/10.1109/ICSSIT53264.2022.9716349",
    "status": ""
  },
  {
    "title": "User privacy-preserving encryption strategy out sourcing data in mobile cloud computing",
    "authors": "Sairam V.P.N.; Vurukonda N.; Likitha K.; Tarun U.; Deepak V.",
    "source": "International Journal of Advanced Science and Technology",
    "year": 2020,
    "type": "Article",
    "citations": 5,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85084579657&partnerID=40&md5=ef9ef6c3fa4157c56e3650bd472613d2",
    "status": ""
  },
  {
    "title": "LIGHTWEIGHT CNN-TRANSFORMER FUSION MODEL FOR AUTOMATED RIB FRACTURE LOCALIZATION IN RADIOGRAPHS",
    "authors": "Rangnath N.A.; Babu A.A.; Purimetla N.R.; Begum S.S.; Deepak V.; Sindhura S.; Jaya N.",
    "source": "Journal of Theoretical and Applied Information Technology",
    "year": 2026,
    "type": "Article",
    "citations": 0,
    "doi": "10.5281/zenodo.18666797",
    "link": "https://doi.org/10.5281/zenodo.18666797",
    "status": ""
  },
  {
    "title": "Feasibility study of compost as a partial substitute for fine aggregate in concrete",
    "authors": "Arikaravelan N.; Deepak V.; Dhinesh Kumar N.; Muthulingam G.; Vanitha S.; Karthigai Priya P.; Sabariraj S.",
    "source": "International Review of Applied Sciences and Engineering",
    "year": 2022,
    "type": "Article",
    "citations": 2,
    "doi": "10.1556/1848.2021.00357",
    "link": "https://doi.org/10.1556/1848.2021.00357",
    "status": ""
  },
  {
    "title": "Retracted: An Improved Early Detection Method of Autism Spectrum Anarchy using Euclidean Method (2020 Fourth International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud) (I-SMAC) DOI: 10.1109/I-SMAC49090.2020.11475156)",
    "authors": "Deepak V.; Thangaraj S.J.J.; Khanna M.R.",
    "source": "Proceedings of the 4th International Conference on IoT in Social, Mobile, Analytics and Cloud, ISMAC 2020",
    "year": 2020,
    "type": "Erratum",
    "citations": 0,
    "doi": "10.1109/I-SMAC49090.2020.9243361",
    "link": "https://doi.org/10.1109/I-SMAC49090.2020.9243361",
    "status": "Retracted"
  },
  {
    "title": "Load Balancing Strategies for Cloud Computing: A Comprehensive Review",
    "authors": "Sree T.N.; Kalyan R.V.; Azam Khan P.F.; Deepak V.",
    "source": "2nd International Conference on Intelligent Data Communication Technologies and Internet of Things, IDCIoT 2024",
    "year": 2024,
    "type": "Conference paper",
    "citations": 8,
    "doi": "10.1109/IDCIoT59759.2024.10467233",
    "link": "https://doi.org/10.1109/IDCIoT59759.2024.10467233",
    "status": ""
  },
  {
    "title": "Enhancing the use of coal-fly ash in coarse aggregates concrete",
    "authors": "Shanmugan S.; Deepak V.; Nagaraj J.; Jangir D.; Viyagula Jegan S.; Palani S.",
    "source": "Materials Today: Proceedings",
    "year": 2020,
    "type": "Conference paper",
    "citations": 18,
    "doi": "10.1016/j.matpr.2020.05.734",
    "link": "https://doi.org/10.1016/j.matpr.2020.05.734",
    "status": ""
  },
  {
    "title": "Neuro-Symbolic Transfer Learning Model with Logic-Based Intrusion Detection System in IoT",
    "authors": "Deepak V.; Thangaraj S.J.J.; Yogaraja C.A.; Iswariya S.",
    "source": "Neuro-Symbolic AI: Concepts and Applications",
    "year": 2026,
    "type": "Book chapter",
    "citations": 0,
    "doi": "",
    "link": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-105046940755&partnerID=40&md5=546a3abf54f30745493a20e58e10429a",
    "status": ""
  },
  {
    "title": "Utilization of PET bottles and plastic granules in geopolymer concrete",
    "authors": "Chithambar Ganesh A.; Deepak N.; Deepak V.; Ajay S.; Pandian A.; Karthik",
    "source": "Materials Today: Proceedings",
    "year": 2020,
    "type": "Conference paper",
    "citations": 30,
    "doi": "10.1016/j.matpr.2020.10.170",
    "link": "https://doi.org/10.1016/j.matpr.2020.10.170",
    "status": ""
  }
];

const PAGE_SIZE = 10;

function Publications({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const years = useMemo(
    () =>
      [...new Set(publications.map((publication) => publication.year))]
        .filter(Boolean)
        .sort((a, b) => b - a),
    []
  );

  const documentTypes = useMemo(
    () => [...new Set(publications.map((publication) => publication.type))].sort(),
    []
  );

  const totalCitations = publications.reduce(
    (sum, publication) => sum + publication.citations,
    0
  );

  const filteredPublications = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return publications
      .filter((publication) => {
        const matchesSearch =
          !query ||
          publication.title.toLowerCase().includes(query) ||
          publication.authors.toLowerCase().includes(query) ||
          publication.source.toLowerCase().includes(query);

        const matchesYear =
          yearFilter === "All" || String(publication.year) === yearFilter;

        const matchesType =
          typeFilter === "All" || publication.type === typeFilter;

        return matchesSearch && matchesYear && matchesType;
      })
      .sort((a, b) =>
        sortOrder === "newest" ? b.year - a.year : a.year - b.year
      );
  }, [searchTerm, yearFilter, typeFilter, sortOrder]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPublications.length / PAGE_SIZE)
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedPublications = filteredPublications.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE
  );

  const resetFilters = () => {
    setSearchTerm("");
    setYearFilter("All");
    setTypeFilter("All");
    setSortOrder("newest");
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleYearFilter = (event) => {
    setYearFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleTypeFilter = (event) => {
    setTypeFilter(event.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="publications-page">
      <nav className="navbar publications-navbar">
        <div className="container nav-container">
          <button
            type="button"
            className="logo publication-logo"
            onClick={onBack}
            aria-label="Back to portfolio home"
          >
            Deepak<span>.</span>
          </button>

          <button type="button" className="back-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      <main className="publications-main">
        <div className="container">
          <div className="publications-header">
            <p>RESEARCH PUBLICATIONS</p>
            <h1>Publications</h1>
            <p className="publications-description">
              Scopus-indexed research publications, including publication
              year, venue, document type, citation count, DOI and source link.
            </p>
          </div>

          <section className="publication-stats" aria-label="Publication statistics">
            <div className="publication-stat-card">
              <strong>{publications.length}</strong>
              <span>Total Records</span>
            </div>
            <div className="publication-stat-card">
              <strong>{totalCitations}</strong>
              <span>Total Citations</span>
            </div>
            <div className="publication-stat-card">
              <strong>{publications.filter((p) => p.type === "Article").length}</strong>
              <span>Journal Articles</span>
            </div>
            <div className="publication-stat-card">
              <strong>
                {publications.filter((p) => p.type === "Conference paper").length}
              </strong>
              <span>Conference Papers</span>
            </div>
          </section>

          <section className="publication-controls" aria-label="Publication filters">
            <div className="publication-search">
              <label htmlFor="publication-search">Search</label>
              <input
                id="publication-search"
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search title, author or journal/conference..."
              />
            </div>

            <div className="publication-filter">
              <label htmlFor="publication-year">Year</label>
              <select
                id="publication-year"
                value={yearFilter}
                onChange={handleYearFilter}
              >
                <option value="All">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="publication-filter">
              <label htmlFor="publication-type">Document Type</label>
              <select
                id="publication-type"
                value={typeFilter}
                onChange={handleTypeFilter}
              >
                <option value="All">All Types</option>
                {documentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="publication-filter">
              <label htmlFor="publication-sort">Sort</label>
              <select
                id="publication-sort"
                value={sortOrder}
                onChange={(event) => {
                  setSortOrder(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            <button
              type="button"
              className="publication-reset"
              onClick={resetFilters}
            >
              Reset
            </button>
          </section>

          <div className="publication-results-info">
            <span>
              Showing <strong>{filteredPublications.length}</strong> of{" "}
              <strong>{publications.length}</strong> records
            </span>

            {(publications.some((p) => p.status === "Retracted") ||
              publications.some((p) => p.status === "Erratum")) && (
              <span className="publication-note">
                {publications.filter((p) => p.status === "Retracted").length > 0 &&
                  `${publications.filter((p) => p.status === "Retracted").length} retracted record(s)`}
                {publications.some((p) => p.status === "Retracted") &&
                  publications.some((p) => p.status === "Erratum") &&
                  " • "}
                {publications.filter((p) => p.status === "Erratum").length > 0 &&
                  `${publications.filter((p) => p.status === "Erratum").length} erratum record(s)`}
              </span>
            )}
          </div>

          <div className="publications-table-card">
            <div className="table-responsive">
              <table className="publications-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Title of Publication</th>
                    <th>Authors</th>
                    <th>Publication / Journal / Conference</th>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Citations</th>
                    <th>DOI / Link</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedPublications.length > 0 ? (
                    paginatedPublications.map((publication, index) => (
                      <tr
                        key={`${publication.title}-${publication.year}-${index}`}
                      >
                        <td>
                          {(safeCurrentPage - 1) * PAGE_SIZE + index + 1}
                        </td>

                        <td className="publication-title-cell">
                          <div className="publication-title">
                            {publication.title}
                          </div>

                          {publication.status && (
                            <span
                              className={`publication-status publication-status-${publication.status.toLowerCase()}`}
                            >
                              {publication.status}
                            </span>
                          )}
                        </td>

                        <td>{publication.authors}</td>
                        <td>{publication.source || "—"}</td>
                        <td>{publication.year || "—"}</td>

                        <td>
                          <span className="publication-type-badge">
                            {publication.type || "—"}
                          </span>
                        </td>

                        <td className="citation-cell">
                          {publication.citations}
                        </td>

                        <td>
                          {publication.link ? (
                            <a
                              href={publication.link}
                              target="_blank"
                              rel="noreferrer"
                              className="publication-link"
                            >
                              {publication.doi ? "View DOI" : "View Record"}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="empty-publications">
                        No publications match the selected search/filter
                        criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {totalPages > 1 && (
            <nav
              className="publication-pagination"
              aria-label="Publication pages"
            >
              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    className={page === safeCurrentPage ? "active" : ""}
                    onClick={() => goToPage(page)}
                    aria-current={
                      page === safeCurrentPage ? "page" : undefined
                    }
                  >
                    {page}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
              >
                Next →
              </button>
            </nav>
          )}

          <p className="publication-source-note">
            Publication details are presented from the supplied Scopus export.
            Citation counts and indexing status may change as Scopus updates.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Publications;
