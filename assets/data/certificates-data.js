(function (global) {
  'use strict';

  const KFU_CLUB_KEY = 'kfu-cybersecurity-club';

  const CERTIFICATES = [
    {id:'iso-27001-lead-auditor',type:'credential',file:'01.jpg',title:{ar:'مدقق رئيسي ISO/IEC 27001:2022',en:'ISO/IEC 27001:2022 Lead Auditor'},issuer:'Mastermind Assurance',issuerKey:'mastermind-assurance',field:'grc',fields:['grc'],sub:null,hours:16,date:'2025-06-15',priority:1,featured:true,note:{ar:'شهادة كفاءة: تدريب + اختبار مهارات — 16 ساعة معتمدة',en:'Certificate of Competency: training + skills-based exam — 16 credit hours'}},
    {id:'ejpt-prep',type:'training',file:'17.jpg',title:{ar:'EJPT Prep Course',en:'EJPT Prep Course'},issuer:'King Faisal University Cybersecurity Club',issuerKey:KFU_CLUB_KEY,field:'cyber',fields:['cyber'],sub:'offensive',hours:16,date:'2025-11-20',priority:2,featured:true},
    {id:'pt1-thm-prep',type:'training',file:'21-thm-pt1-prep.jpg',title:{ar:'PT1 – THM Prep Course',en:'PT1 – THM Prep Course'},issuer:'King Faisal University Cybersecurity Club',issuerKey:KFU_CLUB_KEY,partner:'Tuwaiq Club · CyberPro Pathway',field:'cyber',fields:['cyber'],sub:'offensive',hours:30,date:null,priority:3,featured:true},
    {id:'cisco-intro-cyber',type:'training',file:'16.jpg',title:{ar:'Introduction to Cybersecurity',en:'Introduction to Cybersecurity'},issuer:'Cisco Networking Academy',issuerKey:'cisco-networking-academy',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2025-06-15',priority:4,featured:true},
    {id:'cysa-prep',type:'training',file:'20-cysa-prep.jpg',title:{ar:'CySA+ (CompTIA) Prep Course',en:'CySA+ (CompTIA) Prep Course'},issuer:'King Faisal University Cybersecurity Club',issuerKey:KFU_CLUB_KEY,partner:'Tuwaiq Club · CyberPro Pathway',field:'cyber',fields:['cyber'],sub:'blue',hours:8,date:null,priority:23,featured:false},
    {id:'phishing-forensics',type:'training',file:'19-phishing-analysis-forensics.jpg',title:{ar:'Phishing Analysis and Digital Forensics',en:'Phishing Analysis and Digital Forensics'},issuer:'King Faisal University Cybersecurity Club',issuerKey:KFU_CLUB_KEY,partner:'Tuwaiq Club · CyberPro Pathway',field:'cyber',fields:['cyber'],sub:'blue',hours:8,date:null,priority:6,featured:true},
    {id:'ctf-attendance',type:'attendance',file:'22-ctf-competition.png',title:{ar:'مسابقة CTF (حضور)',en:'CTF Competition — attendance'},issuer:'King Faisal University Cybersecurity Club',issuerKey:KFU_CLUB_KEY,partner:'CyberXBytes',field:'cyber',fields:['cyber'],sub:'offensive',hours:7,date:'2025-11-26',priority:7,featured:false},
    {id:'ai-cybersecurity',type:'training',file:'18-ai-cybersecurity.jpg',title:{ar:'AI for Cybersecurity',en:'AI for Cybersecurity'},issuer:'Capsule Tahawul Initiative',issuerKey:'capsule-tahawul',field:'ai',fields:['ai','cyber'],sub:'blue',hours:null,date:'2026-08-16',priority:5,featured:true},
    {id:'edraak-career-cyber',type:'training',file:'11.jpg',title:{ar:'مسار مهني في الأمن السيبراني',en:'Career path in Cyber Security'},issuer:'Edraak',issuerKey:'edraak',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2024-08-27',priority:9,featured:false},
    {id:'edraak-protect-systems',type:'training',file:'12.jpg',title:{ar:'حماية الأنظمة من الاختراقات',en:'Protect Systems from Penetrations'},issuer:'Edraak',issuerKey:'edraak',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2024-08-27',priority:10,featured:false},
    {id:'edraak-attack-techniques',type:'training',file:'13.jpg',title:{ar:'تقنيات هجمات الأمن السيبراني',en:'Cyber Security Attack Techniques'},issuer:'Edraak',issuerKey:'edraak',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2024-08-27',priority:11,featured:false},
    {id:'edraak-cyber-basics',type:'training',file:'14.jpg',title:{ar:'أساسيات الأمن السيبراني',en:'Cyber Security Basics'},issuer:'Edraak',issuerKey:'edraak',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2024-08-27',priority:12,featured:false},
    {id:'edraak-intro-cyber',type:'training',file:'15.jpg',title:{ar:'مقدمة في الأمن السيبراني',en:'Introduction to Cyber Security'},issuer:'Edraak',issuerKey:'edraak',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2024-08-27',priority:13,featured:false},
    {id:'doroob-cybersecurity',type:'training',file:'09.jpg',title:{ar:'الأمن السيبراني',en:'Cybersecurity'},issuer:'Doroob',issuerKey:'doroob',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2023-05-15',priority:14,featured:false},
    {id:'doroob-cyber-security',type:'training',file:'10.jpg',title:{ar:'أمن المعلومات',en:'Cyber Security'},issuer:'Doroob',issuerKey:'doroob',field:'cyber',fields:['cyber'],sub:'fundamentals',hours:null,date:'2023-01-31',priority:15,featured:false},
    {id:'doroob-risk-management',type:'training',file:'05.jpg',title:{ar:'إدارة المخاطر',en:'Risk management'},issuer:'Doroob',issuerKey:'doroob',field:'grc',fields:['grc'],sub:null,hours:null,date:'2023-11-21',priority:16,featured:false},
    {id:'doroob-cloud',type:'training',file:'07.jpg',title:{ar:'الحوسبة السحابية',en:'Cloud Computing'},issuer:'Doroob',issuerKey:'doroob',field:'cloud',fields:['cloud'],sub:null,hours:null,date:'2024-07-18',priority:17,featured:false},
    {id:'doroob-ml',type:'training',file:'06.jpg',title:{ar:'تعلم الآلة',en:'Machine Learning'},issuer:'Doroob',issuerKey:'doroob',field:'ai',fields:['ai'],sub:null,hours:null,date:'2024-07-18',priority:18,featured:false},
    {id:'doroob-web-dev',type:'training',file:'02.jpg',title:{ar:'تطوير تطبيقات الويب',en:'Web Application Development'},issuer:'Doroob',issuerKey:'doroob',field:'dev',fields:['dev'],sub:null,hours:null,date:'2023-11-22',priority:19,featured:false},
    {id:'doroob-digital-transformation',type:'training',file:'03.jpg',title:{ar:'التحول الرقمي',en:'Digital Transformation'},issuer:'Doroob',issuerKey:'doroob',field:'it',fields:['it'],sub:null,hours:null,date:'2023-11-22',priority:20,featured:false},
    {id:'doroob-iot',type:'training',file:'04.jpg',title:{ar:'إنترنت الأشياء وتطبيقاتها',en:'Internet of Things Applications'},issuer:'Doroob',issuerKey:'doroob',field:'it',fields:['it'],sub:null,hours:null,date:'2023-11-21',priority:21,featured:false},
    {id:'doroob-it-intro',type:'training',file:'08.jpg',title:{ar:'تعرف على أساسيات الحاسب الآلي',en:'Introduction in the Information Technology'},issuer:'Doroob',issuerKey:'doroob',field:'it',fields:['it'],sub:null,hours:null,date:'2023-06-06',priority:22,featured:false}
  ];

  const PRO_CERTS = [];

  global.CERTIFICATES = CERTIFICATES;
  global.PRO_CERTS = PRO_CERTS;
})(window);
