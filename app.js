const DATA={
  "profile": {
    "name": {
      "ar": "عبدالله ناصر المسن",
      "en": "Abdullah Nasser AlMsan"
    },
    "title": {
      "ar": "مرحبًا، أنا عبدالله ناصر المسن",
      "en": "Hi, I'm Abdullah Nasser AlMsan"
    },
    "summary": {
      "ar": "دعم تقني حاليًا → أبني مسار SOC / Blue Team.",
      "en": "IT support today → building a focused SOC / Blue Team path."
    },
    "location": {
      "ar": "الرياض، السعودية",
      "en": "Riyadh, Saudi Arabia"
    },
    "email": "Abdullah.n.almsan@gmail.com",
    "phone": "+966582775179",
    "phoneDisplay": "+966 58 277 5179",
    "linkedin": "https://www.linkedin.com/in/abdullah-nasser-al-msan-/",
    "portfolio": "https://abdullah-almsan.github.io/portfolio/",
    "whatsapp": "https://wa.me/966582775179"
  },
  "nav": {
    "ar": [
      ["about", "نبذة"],
      ["skills", "المهارات"],
      ["certifications", "الشهادات والتدريب"],
      ["projects", "المشاريع"],
      ["education", "التعليم"],
      ["contact", "تواصل"]
    ],
    "en": [
      ["about", "About"],
      ["skills", "Skills"],
      ["certifications", "Certifications & Training"],
      ["projects", "Projects"],
      ["education", "Education"],
      ["contact", "Contact"]
    ]
  },
  "projects": [
    {
      "id": "soc-network-traffic",
      "title": {
        "ar": "تحقيق حركة شبكة من ملف PCAP",
        "en": "PCAP Network Traffic Investigation"
      },
      "cardTitle": {
        "ar": "تحقيق حركة شبكة من ملف PCAP",
        "en": "PCAP Traffic Investigation"
      },
      "modalTitle": {
        "ar": "دراسة حالة: تحليل نشاط NetSupport داخل PCAP",
        "en": "Case Study: NetSupport Activity in a PCAP"
      },
      "subtitle": {
        "ar": "دراسة حالة موجهة · Wireshark · PCAP",
        "en": "Guided case study · Wireshark · PCAP"
      },
      "status": "complete",
      "statusText": {
        "ar": "دراسة حالة موجهة",
        "en": "Guided Case Study"
      },
      "tags": [
        "Wireshark",
        "PCAP",
        "Network Analysis",
        "Incident Triage",
        "NetSupport"
      ],
      "cardTags": [
        "Wireshark",
        "PCAP",
        "Network",
        "Triage"
      ],
      "desc": {
        "ar": "حللت ملف حركة شبكة في Wireshark لتتبع تنبيه، ثم ربطت الأدلة لتحديد الجهاز والحساب ونمط الاتصال المرتبط به.",
        "en": "I analyzed a network capture in Wireshark, followed an alert, and connected the evidence to identify the device, account, and communication pattern."
      },
      "cardDesc": {
        "ar": "حللت ملف شبكة لتحديد الجهاز والمستخدم ونمط الاتصال المرتبط بالتنبيه.",
        "en": "I traced a network alert to identify the device, user, and communication pattern behind it."
      },
      "contribution": {
        "ar": "السيناريو وملف PCAP كانا جاهزين؛ نفذت التحليل داخل Wireshark، ربطت الأدلة، وراجعت المنطق ثم وثقت النتيجة.",
        "en": "The scenario and PCAP were provided; I performed the Wireshark analysis, correlated the evidence, reviewed the reasoning, and documented the result."
      },
      "gallery": [
        [
          "assets/soc-network/evidence-01-overview.jpg",
          {
            "ar": "الدليل 01 — ربط مؤشر IOC: حركة بين الجهاز الداخلي والعنوان الخارجي المذكور في تنبيه SIEM.",
            "en": "Evidence 01 — IOC Correlation: traffic between the internal host and the external IP identified in the SIEM alert."
          }
        ],
        [
          "assets/soc-network/evidence-02-periodic-post.jpg",
          {
            "ar": "الدليل 02 — نشاط HTTP POST دوري: طلبات متكررة من الجهاز المتأثر إلى البنية الخارجية المذكورة في التنبيه.",
            "en": "Evidence 02 — Periodic HTTP POST Activity: repeated POST requests from the affected endpoint to the alerted external infrastructure."
          }
        ],
        [
          "assets/soc-network/evidence-03-netsupport-client.jpg",
          {
            "ar": "الدليل 03 — تعريف عميل NetSupport: يظهر User-Agent باسم NetSupport Manager/1.3 مع CMD=POLL.",
            "en": "Evidence 03 — NetSupport Client Identification: the HTTP User-Agent identifies NetSupport Manager/1.3 and the request contains CMD=POLL."
          }
        ],
        [
          "assets/soc-network/evidence-04-gateway-response.jpg",
          {
            "ar": "الدليل 04 — استجابة NetSupport Gateway: الطرف الخارجي يعرّف نفسه باسم NetSupport Gateway/1.92.",
            "en": "Evidence 04 — NetSupport Gateway Response: the external endpoint responds as NetSupport Gateway/1.92."
          }
        ],
        [
          "assets/soc-network/evidence-05-endpoint-nbns.jpg",
          {
            "ar": "الدليل 05 — تحديد الجهاز: حركة NBNS تظهر اسم Windows DESKTOP-TEYQ2NR.",
            "en": "Evidence 05 — Endpoint Identification: NBNS traffic identifies the Windows hostname as DESKTOP-TEYQ2NR."
          }
        ],
        [
          "assets/soc-network/evidence-06-user-kerberos.jpg",
          {
            "ar": "الدليل 06 — تحديد المستخدم: Kerberos CNameString يظهر الحساب brolf.",
            "en": "Evidence 06 — User Identification: Kerberos CNameString identifies the account brolf."
          }
        ],
        [
          "assets/soc-network/evidence-07-user-samr.jpg",
          {
            "ar": "الدليل 07 — تأكيد هوية الحساب: SAMR QueryUserInfo يظهر brolf والاسم الكامل Becka Rolf.",
            "en": "Evidence 07 — Account Confirmation: SAMR QueryUserInfo confirms brolf and reveals the full name Becka Rolf."
          }
        ]
      ],
      "details": {
        "ar": [
          [
            "01 — نظرة عامة",
            "دراسة حالة تدريبية مبنية على ملف PCAP وسيناريو جاهز. طبقت خطوات التحليل داخل Wireshark، راجعت الأدلة والعلاقة بينها، ثم رتبت النتيجة في دراسة حالة قابلة للمراجعة."
          ],
          [
            "02 — السيناريو",
            "بدأ التمرين من تنبيه SIEM لنشاط NetSupport Manager RAT مرتبط بالعنوان الخارجي <span class=\"ltr-inline\">45.131.214.85</span> عبر <span class=\"ltr-inline\">TCP/443</span> بتاريخ <span class=\"ltr-inline\">2026-02-28 19:55 UTC</span>. شبكة التدريب هي <span class=\"ltr-inline\">10.2.28.0/24</span> ضمن بيئة Active Directory باسم <span class=\"ltr-inline\">EASYAS123</span>."
          ],
          [
            "03 — التحقيق",
            "اتبعت مسار التحليل من Endpoints وConversations، ثم استخدمت الفلتر <code>ip.addr == 45.131.214.85</code> لربط الـIOC المعطى من SIEM بالحركة داخل الملف، وظهر الجهاز الداخلي <span class=\"ltr-inline\">10.2.28.88</span>. بعدها راجعت HTTP والطلبات والاستجابات، ثم استخدمت Ethernet II وNBNS وKerberos وSAMR للوصول إلى بيانات الجهاز والحساب. عندما كان جزء من LDAP محميًا بـ SASL GSS-API، استخدمت SAMR لتأكيد الحساب والاسم الكامل. عدد الـPackets وحده لم أتعامل معه كدليل على نشاط خبيث."
          ],
          [
            "04 — الأدلة",
            "لوحظت طلبات HTTP POST متكررة إلى <code>/fakeurl.htm</code> مع <code>User-Agent: NetSupport Manager/1.3</code> و<code>CMD=POLL</code>. كما ظهر الطرف المقابل باسم <code>NetSupport Gateway/1.92 (Windows NT)</code> ورسائل <code>CMD=ENCD</code>. شوهد HTTP بنمط plaintext على TCP/443 كإشارة إضافية للتحقيق، وليس كدليل مستقل على نشاط خبيث. بيانات ENCD لم يتم فكها ولا أدّعي معرفة محتواها."
          ],
          [
            "05 — النتائج",
            "<div class=\"soc-findings-table\"><table><tbody><tr><th>Internal / affected IP</th><td>10.2.28.88</td></tr><tr><th>MAC Address</th><td>00:19:d1:b2:4d:ad</td></tr><tr><th>Hostname</th><td>DESKTOP-TEYQ2NR</td></tr><tr><th>User Account</th><td>brolf</td></tr><tr><th>Full Name</th><td>Becka Rolf</td></tr><tr><th>External Alerted IOC</th><td>45.131.214.85</td></tr><tr><th>Destination Port</th><td>TCP/443</td></tr><tr><th>Observed Application Traffic</th><td>HTTP</td></tr><tr><th>Client Identifier</th><td>NetSupport Manager/1.3</td></tr><tr><th>Server Identifier</th><td>NetSupport Gateway/1.92 (Windows NT)</td></tr><tr><th>HTTP Path</th><td>/fakeurl.htm</td></tr><tr><th>Observed Command</th><td>CMD=POLL</td></tr><tr><th>Additional Message Type</th><td>CMD=ENCD</td></tr></tbody></table></div>"
          ],
          [
            "06 — التقييم والنتيجة",
            "الأدلة تربط تنبيه NetSupport Manager بالجهاز الداخلي <span class=\"ltr-inline\">10.2.28.88</span> وتُظهر نمط اتصال متكرر بين NetSupport Manager/1.3 وNetSupport Gateway/1.92. كما ساعدت NBNS وKerberos وSAMR في تحديد <span class=\"ltr-inline\">DESKTOP-TEYQ2NR / brolf (Becka Rolf)</span>. بالجمع بين التنبيه وهذه الأدلة، النتيجة تستحق التحقق على مستوى الجهاز. ملف PCAP وحده لا يثبت الأوامر الدقيقة المنفذة أو محتوى ENCD."
          ],
          [
            "07 — الإجراءات الموصى بها",
            "<ol><li>التحقق أولًا مما إذا كان استخدام NetSupport Manager مصرحًا به.</li><li>إذا كان النشاط غير مصرح به، عزل الجهاز وفق إجراءات الجهة.</li><li>جمع معلومات العمليات والاتصالات وآليات التشغيل التلقائي من الجهاز.</li><li>مراجعة نشاط حساب المستخدم والبحث عن نفس الـIOC أو مؤشرات NetSupport في الأجهزة الأخرى.</li><li>حفظ الأدلة والتصعيد لفريق الاستجابة للحوادث عند تأكيد الاختراق.</li></ol><p class=\"detail-note\">هذه خطوات مقترحة فقط؛ لم أنفذ عزلًا أو حظرًا فعليًا ضمن هذا التمرين.</p>"
          ],
          [
            "08 — ما تعلمته",
            "<div class=\"soc-skill-list\"><span>Wireshark</span><span>PCAP workflow</span><span>HTTP review</span><span>NBNS / Kerberos / SAMR</span><span>Evidence correlation</span></div><p class=\"detail-note\">أهم ما تعلمته أن التنبيه نقطة بداية، وأن قيمة التحليل تأتي من ربط الأدلة وفهم السياق بدل الاعتماد على مؤشر واحد.</p>"
          ],
          [
            "09 — طريقة التنفيذ والمصدر",
            "نفذت هذه الحالة كتمرين تعلّم موجّه مع الاستفادة من أدوات الذكاء الاصطناعي في بعض خطوات التحليل والفلاتر. طبقت التحليل داخل Wireshark، راجعت الأدلة والمنطق وراء كل خطوة، ثم وثقت النتيجة. ملف PCAP والسيناريو مقدمان من <strong><span class=\"ltr-inline\">Malware-Traffic-Analysis.net</span></strong> ضمن تمرين <strong><span class=\"ltr-inline\">2026-02-28 — Traffic Analysis Exercise: Easy As 123</span></strong>. <a class=\"inline-source-link\" href=\"https://www.malware-traffic-analysis.net/2026/02/28/index.html\" target=\"_blank\" rel=\"noopener\">عرض مصدر التمرين الأصلي ↗</a>"
          ]
        ],
        "en": [
          [
            "01 — Overview",
            "A training case study based on a provided PCAP and scenario. I reproduced the analysis in Wireshark, reviewed how the evidence connected across the steps, and organized the result into a reviewable case study."
          ],
          [
            "02 — Scenario",
            "The exercise began with SIEM signature hits for NetSupport Manager RAT associated with external IP <span class=\"ltr-inline\">45.131.214.85</span> over <span class=\"ltr-inline\">TCP/443</span>, starting at <span class=\"ltr-inline\">2026-02-28 19:55 UTC</span>. The training LAN is <span class=\"ltr-inline\">10.2.28.0/24</span> in the <span class=\"ltr-inline\">EASYAS123</span> Active Directory environment."
          ],
          [
            "03 — Investigation",
            "I followed the analysis from Endpoints and Conversations, then used <code>ip.addr == 45.131.214.85</code> to connect the SIEM-provided IOC with traffic in the capture and identify internal host <span class=\"ltr-inline\">10.2.28.88</span>. I then reviewed HTTP requests and responses and used Ethernet II, NBNS, Kerberos, and SAMR to reach the endpoint and account details. When part of LDAP was protected with SASL GSS-API, SAMR provided the account and full-name confirmation. Packet volume alone was not treated as proof of malicious activity."
          ],
          [
            "04 — Evidence",
            "Repeated HTTP POST requests to <code>/fakeurl.htm</code> were observed with <code>User-Agent: NetSupport Manager/1.3</code> and <code>CMD=POLL</code>. The remote endpoint identified itself as <code>NetSupport Gateway/1.92 (Windows NT)</code>, followed by <code>CMD=ENCD</code> exchanges. Plaintext HTTP-style traffic over TCP/443 was treated as an additional clue, not standalone proof. The ENCD payload was not decoded, and no claim is made about its exact contents."
          ],
          [
            "05 — Findings",
            "<div class=\"soc-findings-table\"><table><tbody><tr><th>Internal / affected IP</th><td>10.2.28.88</td></tr><tr><th>MAC Address</th><td>00:19:d1:b2:4d:ad</td></tr><tr><th>Hostname</th><td>DESKTOP-TEYQ2NR</td></tr><tr><th>User Account</th><td>brolf</td></tr><tr><th>Full Name</th><td>Becka Rolf</td></tr><tr><th>External Alerted IOC</th><td>45.131.214.85</td></tr><tr><th>Destination Port</th><td>TCP/443</td></tr><tr><th>Observed Application Traffic</th><td>HTTP</td></tr><tr><th>Client Identifier</th><td>NetSupport Manager/1.3</td></tr><tr><th>Server Identifier</th><td>NetSupport Gateway/1.92 (Windows NT)</td></tr><tr><th>HTTP Path</th><td>/fakeurl.htm</td></tr><tr><th>Observed Command</th><td>CMD=POLL</td></tr><tr><th>Additional Message Type</th><td>CMD=ENCD</td></tr></tbody></table></div>"
          ],
          [
            "06 — Assessment & Outcome",
            "The evidence connects the NetSupport Manager alert to internal host <span class=\"ltr-inline\">10.2.28.88</span> and shows a recurring communication pattern between NetSupport Manager/1.3 and NetSupport Gateway/1.92. NBNS, Kerberos, and SAMR also identify <span class=\"ltr-inline\">DESKTOP-TEYQ2NR / brolf (Becka Rolf)</span>. Combined with the original alert, this is enough to justify endpoint-level validation. The PCAP alone does not prove the exact commands executed or the contents of ENCD."
          ],
          [
            "07 — Recommended Actions",
            "<ol><li>Confirm whether NetSupport Manager use was authorized.</li><li>If unauthorized, isolate the endpoint using the organization’s normal process.</li><li>Collect process, connection, and startup/persistence information from the endpoint.</li><li>Review the user’s authentication activity and hunt for the same IOC or NetSupport indicators elsewhere.</li><li>Preserve the evidence and escalate to incident response if compromise is confirmed.</li></ol><p class=\"detail-note\">These are suggested next steps only; no isolation or blocking was performed in this exercise.</p>"
          ],
          [
            "08 — What I Learned",
            "<div class=\"soc-skill-list\"><span>Wireshark</span><span>PCAP workflow</span><span>HTTP review</span><span>NBNS / Kerberos / SAMR</span><span>Evidence correlation</span></div><p class=\"detail-note\">The main takeaway was that an alert is a starting point, and the useful part of the analysis is connecting evidence in context rather than relying on a single indicator.</p>"
          ],
          [
            "09 — Method & Source",
            "Completed as a guided learning exercise with AI assistance. I reproduced the analysis in Wireshark, reviewed the evidence and reasoning behind each step, and documented the outcome. The PCAP and scenario were provided by <strong>Malware-Traffic-Analysis.net</strong> for <strong>2026-02-28 — Traffic Analysis Exercise: Easy As 123</strong>. <a class=\"inline-source-link\" href=\"https://www.malware-traffic-analysis.net/2026/02/28/index.html\" target=\"_blank\" rel=\"noopener\">View original exercise source ↗</a>"
          ]
        ]
      },
      "pipeline": {
        "ar": [
          [
            "التنبيه",
            "تنبيه SIEM لنشاط NetSupport مرتبط بالعنوان 45.131.214.85."
          ],
          [
            "التحقيق",
            "تصفية PCAP وربط HTTP مع NBNS وKerberos وSAMR."
          ],
          [
            "الأدلة",
            "تحديد الجهاز والحساب ونمط NetSupport من حركة الشبكة."
          ],
          [
            "التقييم",
            "النتائج تدعم التصعيد للتحقق على مستوى Endpoint."
          ]
        ],
        "en": [
          [
            "Alert",
            "SIEM alert for NetSupport activity associated with 45.131.214.85."
          ],
          [
            "Investigation",
            "Filtered the PCAP and correlated HTTP, NBNS, Kerberos, and SAMR."
          ],
          [
            "Evidence",
            "Identified the endpoint, account, and NetSupport traffic pattern."
          ],
          [
            "Assessment",
            "Findings support escalation for endpoint-level validation."
          ]
        ]
      },
      "summaryFindings": [
        [{"ar":"IP الداخلي / المتأثر","en":"Internal / affected IP"},"10.2.28.88"],
        [{"ar":"عنوان MAC","en":"MAC Address"},"00:19:d1:b2:4d:ad"],
        [{"ar":"اسم الجهاز","en":"Hostname"},"DESKTOP-TEYQ2NR"],
        [{"ar":"حساب المستخدم","en":"User Account"},"brolf"],
        [{"ar":"IOC الخارجي المنبّه عنه","en":"External Alerted IOC"},"45.131.214.85"],
        [{"ar":"منفذ الوجهة","en":"Destination Port"},"TCP/443"],
        [{"ar":"العميل / الخادم","en":"Client / Server"},"NetSupport Manager/1.3 → NetSupport Gateway/1.92"]
      ]
    },
    {
      "id": "soc-asrep-roasting",
      "title": {
        "ar": "تحليل واكتشاف تغيير Kerberos Pre-Authentication باستخدام Splunk",
        "en": "AS-REP Roasting Exposure Detection & Investigation"
      },
      "cardTitle": {
        "ar": "تتبع تغيير أمني في Kerberos",
        "en": "Tracing a Kerberos security change"
      },
      "image": {
        "ar": "assets/soc-asrep/pages-ar/page-1.png",
        "en": "assets/soc-asrep/pages-en/page-1.png"
      },
      "modalTitle": {
        "ar": "دراسة حالة: تغيير Kerberos Pre-Authentication في Splunk",
        "en": "Case Study: AS-REP Exposure Detection in Splunk"
      },
      "subtitle": {
        "ar": "دراسة حالة SOC موجهة · Splunk · PowerShell · Windows Security",
        "en": "Guided SOC case study · Splunk · PowerShell · Windows Security"
      },
      "status": "complete",
      "statusText": {
        "ar": "مكتمل",
        "en": "Completed"
      },
      "tags": [
        "Splunk",
        "Windows Security",
        "PowerShell",
        "Kerberos",
        "Detection"
      ],
      "cardTags": [
        "Splunk",
        "Kerberos",
        "Windows",
        "Detection"
      ],
      "desc": {
        "ar": "دراسة حالة لفهم كيف يظهر تغيير إعداد أمني داخل سجلات Windows؛ استخدمت Splunk لتتبع التغيير وبناء تنبيه يساعد على اكتشافه.",
        "en": "A case study on how a security setting change appears in Windows logs. I used Splunk to trace the change and build an alert that helps detect it."
      },
      "cardDesc": {
        "ar": "تشرح البطاقة كيف تتبعت تغييرًا حساسًا في السجلات ثم حولته إلى تنبيه واضح داخل Splunk.",
        "en": "Shows how I traced a sensitive Kerberos-related change in logs and turned it into a focused Splunk alert."
      },
      "contribution": {
        "ar": "استخدمت بيانات Splunk Attack Data الجاهزة؛ تتبعت أحداث PowerShell وWindows Security وبنيت استعلام الكشف والتنبيه المجدول، ولم أنشئ الهجوم بنفسي.",
        "en": "I used the provided Splunk Attack Data dataset; I traced the PowerShell and Windows Security events and built the detection query and scheduled alert, rather than generating the attack myself."
      },
      "gallery": [
        [
          "assets/soc-asrep/pages/page-3.webp",
          {
            "ar": "PowerShell Event ID 4104 أظهر ScriptBlockText والأمر الذي عطّل متطلب Kerberos Pre-Authentication لحساب Guest.",
            "en": "PowerShell Event ID 4104 exposed ScriptBlockText and the command that disabled the Kerberos pre-authentication requirement for the Guest account."
          }
        ],
        [
          "assets/soc-asrep/pages/page-4.webp",
          {
            "ar": "مراجعة Windows Security Event ID 4738 كدليل داعم على تغييرات الحسابات، دون ادعاء ارتباط مباشر بحدث Guest.",
            "en": "Windows Security Event ID 4738 reviewed as supporting account-change evidence, without claiming direct correlation to the Guest command."
          }
        ],
        [
          "assets/soc-asrep/pages/page-5.webp",
          {
            "ar": "SPL Detection مركزة تبحث عن DoesNotRequirePreAuth داخل PowerShell ScriptBlockText.",
            "en": "A focused SPL detection searching for DoesNotRequirePreAuth inside PowerShell ScriptBlockText."
          }
        ],
        [
          "assets/soc-asrep/pages/page-7.webp",
          {
            "ar": "التنبيه المجدول AS-REP PreAuth Modification Detection محفوظ ومفعّل داخل Splunk.",
            "en": "The scheduled alert AS-REP PreAuth Modification Detection saved and enabled in Splunk."
          }
        ]
      ],
      "details": {
        "ar": [
          [
            "01 — النطاق ومصدر البيانات",
            "دراسة حالة تدريبية باستخدام بيانات رسمية من <strong>Splunk Attack Data</strong> لمجموعة <strong>T1558.004 PowerShell</strong>. البيانات ليست هجومًا أنشأته بنفسي؛ تم تحليلها داخل Splunk Enterprise بهدف تحديد تغيير إعداد حساس وبناء Detection قابلة لإعادة الاستخدام."
          ],
          [
            "02 — دليل PowerShell",
            "أظهر <strong>PowerShell Event ID 4104</strong> محتوى <code>ScriptBlockText</code>. الأمر المؤكد داخل السجل هو: <code>Get-ADUser Guest | Set-ADAccountControl -DoesNotRequirePreAuth:$true</code>. هذا يعني أن السكربت استهدف حساب Guest وجعل Kerberos Pre-Authentication غير مطلوب."
          ],
          [
            "03 — دليل Windows Security وحدود الارتباط",
            "احتوت بيانات Windows Security على <strong>25 حدثًا من Event ID 4738</strong> الخاص بتغيير حساب مستخدم. أحد الصفوف المراجعة أظهر Administrator يعدّل LYNETTE_BLANCHARD مع وجود قيمة UserAccountControl. هذا يثبت وجود تغييرات حسابات داخل مجموعة التدريب، لكنه <strong>لا يثبت</strong> أن حدث LYNETTE_BLANCHARD كان نتيجة مباشرة لأمر Guest في PowerShell."
          ],
          [
            "04 — SPL Detection",
            "تم بناء بحث مركز لاستخراج ScriptBlockText من XML والبحث عن نمط DoesNotRequirePreAuth:<pre class=\"spl-code\">index=main host=\"asrep-lab\" sourcetype=\"attackdata:powershell:xml\"\n| rex field=_raw \"(?s)&lt;Data Name='ScriptBlockText'&gt;(?&lt;ScriptBlockText&gt;.*?)&lt;/Data&gt;\"\n| search ScriptBlockText=\"*DoesNotRequirePreAuth*\"\n| table _time ScriptBlockText</pre>أعاد البحث حدثين مطابقين."
          ],
          [
            "05 — تحويل النتيجة إلى تنبيه",
            "تم حفظ Detection كتنبـيه مجدول باسم <strong>AS-REP PreAuth Modification Detection</strong>، وهو مفعّل ويعمل بشرط أن يكون <strong>Number of Results &gt; 0</strong>."
          ],
          [
            "06 — ما تعلمته",
            "<div class=\"soc-skill-list\"><span>Splunk search workflow</span><span>index / host / sourcetype</span><span>rex field extraction</span><span>PowerShell 4104</span><span>Windows Security 4738</span><span>search / table / stats</span><span>Scheduled alert</span><span>Evidence vs assumptions</span></div><p class=\"detail-note\">تعلمت تحويل نتيجة تحقيق صغيرة إلى Detection مركزة وتنبيه مجدول، مع فصل الأدلة المؤكدة بوضوح عن الافتراضات.</p>"
          ],
          [
            "07 — MITRE ATT&CK والقيود",
            "التقنية المرتبطة بالدراسة هي <strong>T1558.004 — AS-REP Roasting</strong>. لا تدّعي الدراسة سرقة بيانات اعتماد أو كسر Password Hash أو حدوث اختراق ناجح. كما أن التنبيه يكتشف نمط تغيير الإعداد، ولا يثبت بمفرده تنفيذ هجوم AS-REP Roasting مكتمل."
          ]
        ],
        "en": [
          [
            "01 — Scope and data source",
            "A guided case study using the official <strong>Splunk Attack Data</strong> <strong>T1558.004 PowerShell</strong> dataset. This was not a self-generated attack; the data was analyzed in Splunk Enterprise to identify a risky configuration change and build a reusable detection."
          ],
          [
            "02 — PowerShell evidence",
            "<strong>PowerShell Event ID 4104</strong> exposed <code>ScriptBlockText</code>. The confirmed command in the log is: <code>Get-ADUser Guest | Set-ADAccountControl -DoesNotRequirePreAuth:$true</code>. The script selects the Guest domain account and sets Kerberos pre-authentication so it is not required."
          ],
          [
            "03 — Windows Security evidence and correlation limit",
            "The Windows Security data contained <strong>25 Event ID 4738</strong> account-change events. One reviewed row showed Administrator modifying LYNETTE_BLANCHARD with a UserAccountControl value present. This confirms account-control changes in the training dataset, but it <strong>does not prove</strong> that the LYNETTE_BLANCHARD event was the direct result of the Guest PowerShell command."
          ],
          [
            "04 — SPL detection",
            "A focused search extracted ScriptBlockText from the raw XML and searched for DoesNotRequirePreAuth:<pre class=\"spl-code\">index=main host=\"asrep-lab\" sourcetype=\"attackdata:powershell:xml\"\n| rex field=_raw \"(?s)&lt;Data Name='ScriptBlockText'&gt;(?&lt;ScriptBlockText&gt;.*?)&lt;/Data&gt;\"\n| search ScriptBlockText=\"*DoesNotRequirePreAuth*\"\n| table _time ScriptBlockText</pre>The search returned two matching PowerShell events."
          ],
          [
            "05 — Detection operationalized",
            "The detection was saved as a scheduled Splunk alert named <strong>AS-REP PreAuth Modification Detection</strong>. It is enabled and uses <strong>Number of Results &gt; 0</strong> as its trigger condition."
          ],
          [
            "06 — What I learned",
            "<div class=\"soc-skill-list\"><span>Splunk search workflow</span><span>index / host / sourcetype</span><span>rex field extraction</span><span>PowerShell 4104</span><span>Windows Security 4738</span><span>search / table / stats</span><span>Scheduled alert</span><span>Evidence vs assumptions</span></div><p class=\"detail-note\">The key learning outcome was turning an investigation finding into a focused detection and scheduled alert while keeping confirmed evidence separate from assumptions.</p>"
          ],
          [
            "07 — MITRE ATT&CK and limitations",
            "The case maps to <strong>T1558.004 — AS-REP Roasting</strong>. It does not claim that credentials were stolen, a password hash was cracked, or a successful compromise occurred. The alert detects the configuration-change pattern; it is not proof of a completed AS-REP roasting attack by itself."
          ]
        ]
      },
      "summaryFindings": [
        [{"ar":"مصدر البيانات","en":"Data source"},"Splunk Attack Data - T1558.004 PowerShell"],
        [{"ar":"PowerShell","en":"PowerShell"},"Event ID 4104 / ScriptBlockText"],
        [{"ar":"Windows Security","en":"Windows Security"},"Event ID 4738"],
        [{"ar":"نتيجة Detection","en":"Detection result"},"2 matching events"],
        [{"ar":"التنبيه","en":"Alert"},"AS-REP PreAuth Modification Detection / Enabled"],
        [{"ar":"MITRE ATT&CK","en":"MITRE ATT&CK"},"T1558.004 - AS-REP Roasting"]
      ],
      "link": "resources/pdf-viewer.html?doc=splunk-asrep",
      "download": {
        "ar": "assets/soc-asrep/Splunk_ASREP_Case_Study_AR.pdf",
        "en": "assets/soc-asrep/Splunk_ASREP_Case_Study_EN.pdf"
      },
      "docLabel": {
        "ar": "استعراض الملف",
        "en": "Preview document"
      },
      "downloadLabel": {
        "ar": "تنزيل المستند الكامل",
        "en": "Download full document"
      }
    },
    {
      "id": "penguide",
      "title": "PenGuide",
      "image": "assets/penguide/home.jpg",
      "status": "paused",
      "statusText": {
            "ar": "متوقف مؤقتًا",
            "en": "Paused for now"
      },
      "tags": [
            "Product",
            "Learning",
            "Web Platform"
      ],
      "labLink": {
            "ar": "resources/virtual-lab.html",
            "en": "resources/virtual-lab-en.html"
      },
      "labDownload": {
            "ar": "assets/penguide/VirtualLab_v4_PenGuide.md",
            "en": "assets/penguide/VirtualLab_v4_PenGuide.md"
      },
      "desc": {
            "ar": "منصة ويب شخصية تجمع المحتوى والملاحظات وأدوات التعلم في مكان واحد، مع التركيز على سهولة الاستخدام وتنظيم التجربة.",
            "en": "A personal web platform that brings content, notes, and learning tools into one place, with a focus on organization and ease of use."
      },
      "gallery": [
            [
                  "assets/penguide/home.jpg",
                  {
                        "ar": "الواجهة الرئيسية الفعلية لـ PenGuide.",
                        "en": "The actual PenGuide home interface."
                  }
            ],
            [
                  "assets/penguide/chat/chat-1.webp",
                  {
                        "ar": "لقطة فعلية من المحادثة داخل المشروع.",
                        "en": "A real conversation screenshot from the project."
                  }
            ],
            [
                  "assets/penguide/chat/chat-2.webp",
                  {
                        "ar": "مثال على تحليل نتيجة من اللاب ومتابعة الخطوة التالية.",
                        "en": "An example of interpreting a lab result and deciding the next step."
                  }
            ],
            [
                  "assets/penguide/chat/chat-3.webp",
                  {
                        "ar": "مثال فعلي على الرجوع إلى سياق سابق داخل المحادثة.",
                        "en": "A real example of returning to earlier context inside the conversation."
                  }
            ]
      ],
      "details": {
            "ar": [
                  [
                        "01 — فكرة المشروع",
                        "بدأ PenGuide من حاجة شخصية لتنظيم الملفات والملاحظات والمراجع التي أستخدمها أثناء التعلم. الفكرة تطورت إلى منصة تجمع المحتوى والأدوات والمحادثة الموجهة في تجربة واحدة قابلة للتوسع."
                  ],
                  [
                        "02 — كيف تطورت الفكرة",
                        "بدأت الفكرة كواجهة بسيطة تجمع الأدوات والروابط والملاحظات، ثم تحولت تدريجيًا إلى تجربة منتج أوسع فيها مساعد ذكي، تنظيم للمحتوى، ومحاولة للحفاظ على سياق الجلسة. أضفت أيضًا مختبرًا محاكيًا لبيئة Virtual Machine ليكون جزءًا من تجربة التعلم داخل المنصة، لا كبديل عن مختبر أمني حقيقي."
                  ],
                  [
                        "03 — ما تم تنفيذه",
                        "تم تنفيذ دردشة مدعومة بالذكاء الاصطناعي، مرفقات ومسودات للمحادثات، مختبر محاكي للـ Virtual Machine، صفحة أخبار تقنية وأمن سيبراني، وصفحات للمستخدم والمنصة ومحتوى تعليمي منظم. قيمة هذا الجزء بالنسبة لي هي بناء التجربة وربط المكونات وإدارة الفكرة كمنتج."
                  ],
                  [
                        "04 — الأدوات والذكاء الاصطناعي المستخدم",
                        "اعتمدت في البناء والتنظيم على Cursor وLovable AI، مع الاستفادة من نماذج لغوية مثل Claude وGemini وDeepSeek. المساعد داخل الموقع يعمل عبر OpenRouter مع مزودات ونماذج متعددة للتجربة. دوري كان توجيه البناء، تنظيم المتطلبات، اختبار السلوك، وربط المكونات أكثر من كتابة كل جزء يدويًا من الصفر."
                  ],
                  [
                        "05 — التحدي الحالي",
                        "موثوقية الذاكرة والسياق في المساعد. قد ينسى أن خطوة نُفذت، أو يكرر الطلب، أو يربط الرسائل بشكل غير دقيق. هذه قيد معروفة أعمل على معالجتها، وجزء من التطوير متوقف مؤقتًا إلى أن تتحسن إدارة السياق وجودة التوجيه."
                  ]
            ],
            "en": [
                  [
                        "01 — Project idea",
                        "PenGuide began from a personal need to organize files, notes, and references used while learning. The idea grew into a platform that brings content, tools, and guided conversation into one structured experience."
                  ],
                  [
                        "02 — How the idea evolved",
                        "The idea started as a simple interface for tools, links, and notes, then grew into a broader product experience with an AI assistant, organized content, and an experimental Virtual Machine learning simulator."
                  ],
                  [
                        "03 — What is implemented",
                        "Implemented pieces include AI chat, conversation drafts and attachments, a Virtual Machine lab simulator, a technology/cybersecurity news page, and user/platform pages with organized learning content. The value for me is in designing the experience, connecting components, and managing the idea as a product."
                  ],
                  [
                        "04 — Tools and AI used",
                        "I used Cursor and Lovable AI to support development and organization, alongside language models such as Claude, Gemini, and DeepSeek. The assistant inside the site runs through OpenRouter with multiple providers and models. I focused on structuring requirements, testing behavior, integrating components, and refining the product flow."
                  ],
                  [
                        "05 — Current challenge",
                        "The assistant's memory and context reliability. It can forget that a step was already completed, repeat a request, or link messages inaccurately. This is a known limitation I am working on, and part of the development is paused until context handling and guidance quality improve."
                  ]
            ]
      }
},
{
      "id": "penguide-support",
      "title": {
            "ar": "بوت تيليجرام للدعم الفني لمنصة PenGuide",
            "en": "PenGuide Telegram Support Bot"
      },
      "image": {
            "ar": "assets/telegram-support/card-ar.webp",
            "en": "assets/telegram-support/card-en.webp"
      },
      "status": "complete",
      "statusText": {
            "ar": "مكتمل ومتكامل مع PenGuide",
            "en": "Completed & integrated with PenGuide"
      },
      "tags": [
            "Telegram Bot",
            "Support System",
            "System Architecture"
      ],
      "desc": {
            "ar": "بوت Telegram للدعم الفني يحول رسالة المستخدم إلى تذكرة واضحة، وينظم الرد والمتابعة، ويقلل الرسائل المكررة والمزعجة.",
            "en": "A Telegram support bot that turns a user message into a clear ticket, organizes replies and follow-up, and reduces repeated or spam messages."
      },
      "gallery": [
            [
                  {
                        "ar": "assets/telegram-support/card-ar.webp",
                        "en": "assets/telegram-support/card-en.webp"
                  },
                  {
                        "ar": "هوية المشروع داخل البورتفوليو: نظام دعم مساند لمنظومة PenGuide.",
                        "en": "Portfolio project identity: a support system connected to the PenGuide ecosystem."
                  }
            ],
            [
                  {
                        "ar": "assets/telegram-support/workflow-preview-ar.webp",
                        "en": "assets/telegram-support/workflow-preview-en.webp"
                  },
                  {
                        "ar": "مخطط واضح ومكبر لدورة حياة التذكرة من المستخدم إلى الإدارة.",
                        "en": "A clear, enlarged view of the ticket lifecycle from user request to administration."
                  }
            ],
            [
                  {
                        "ar": "assets/telegram-support/operations-preview-ar.webp",
                        "en": "assets/telegram-support/operations-preview-en.webp"
                  },
                  {
                        "ar": "عرض مكبر للتحديات التشغيلية وسياسات الاعتمادية والحماية.",
                        "en": "An enlarged view of operational challenges, reliability, and protection policies."
                  }
            ]
      ],
      "details": {
            "ar": [
                  [
                        "01 — لماذا أنشأت المشروع",
                        "تم إنشاء البوت ليكون نظام الدعم الفني المساند لمنصة PenGuide، بحيث يحصل المستخدم على قناة تواصل بسيطة داخل Telegram بينما تعمل خلفها دورة تذكرة منظمة تسهّل على الإدارة استلام الطلبات والرد عليها دون فقدان السياق."
                  ],
                  [
                        "02 — دوري في المشروع",
                        "ركز دوري على تصميم منطق النظام ودورة حياة التذكرة، اختيار المكونات، توجيه التنفيذ بمساعدة أدوات الذكاء الاصطناعي، ثم اختبار التدفق وإدارة الاستضافة وآلية التشغيل."
                  ],
                  [
                        "03 — أبرز التحديات والحلول",
                        "ركزت المعالجة على ثلاثة تحديات عملية: Timeouts وتأخر الردود، Spam وتكرار الرسائل، وتمرير الرسائل بين المستخدم ومجموعة الإدارة المخفية. استخدم النظام Ticket ID وChat ID للحفاظ على الربط الصحيح، مع Rate Limiting وآليات تشغيل أكثر تحملاً للانقطاع."
                  ],
                  [
                        "04 — كيف يعمل باختصار",
                        "المستخدم يبدأ عبر /start ويرسل طلبه. البوت ينشئ Ticket ID ويؤكد الاستلام ثم يمرر الرسالة للإدارة. المشرف يرد باستخدام Reply داخل مجموعة الإدارة، ويقوم البوت بإعادة توجيه الرد إلى المستخدم الصحيح. عند الحل، يتم إغلاق التذكرة وتحديث حالتها."
                  ],
                  [
                        "05 — المستند التقني",
                        "للتفاصيل الأعمق عن Workflow وسياسات البوت والبنية التقنية والاستضافة، يمكن الاطلاع على مستند الهيكلة الذي يوثق دورة التذكرة، آلية توجيه الرسائل، الحماية من Spam، ومعالجة الاعتمادية والتشغيل بشكل منظم."
                  ]
            ],
            "en": [
                  [
                        "01 — Why I built it",
                        "The bot was created as the technical support system for PenGuide. Users get a simple Telegram contact channel while a structured ticket workflow runs behind it so administration can receive, track, and answer requests without losing context."
                  ],
                  [
                        "02 — My role",
                        "My role focused on the system logic and ticket lifecycle, selecting the supporting components, guiding AI-assisted implementation, testing the flow, and managing hosting and operation."
                  ],
                  [
                        "03 — Key challenges and solutions",
                        "The project focused on three practical challenges: Timeouts and delayed responses, Spam and repeated messages, and reliable message relay between the user and the hidden administration group. Ticket ID and Chat ID preserve routing, while Rate Limiting and resilient operation reduce disruption."
                  ],
                  [
                        "04 — How it works",
                        "The user starts with /start and submits a request. The bot creates a Ticket ID, confirms receipt, and forwards the request to administration. The administrator replies inside the hidden group, and the bot routes that response back to the correct user. Once resolved, the ticket is closed and its state is updated."
                  ],
                  [
                        "05 — Technical document",
                        "For a deeper technical view, the architecture document covers the ticket workflow, message routing, bot policies, spam protection, reliability handling, and deployment in a structured format."
                  ]
            ]
      },
      "link": {
            "ar": "resources/pdf-viewer.html?doc=telegram-ar",
            "en": "resources/pdf-viewer.html?doc=telegram-en"
      },
      "download": {
            "ar": "assets/telegram-support/Telegram_Support_Bot_Architecture_AR.pdf",
            "en": "assets/telegram-support/Telegram_Support_Bot_Architecture_EN.pdf"
      },
      "docLabel": {
            "ar": "استعراض مستند الهيكلة",
            "en": "View architecture document"
      },
      "downloadLabel": {
            "ar": "تحميل مستند الهيكلة",
            "en": "Download architecture document"
      }
},
{
  "id": "soc-windows-failed-logon",
  "title": {
    "ar": "تحقيق محاولات تسجيل الدخول الفاشلة على Windows",
    "en": "Windows Failed Logon Investigation & Detection"
  },
  "cardTitle": {
    "ar": "تحقيق محاولات الدخول الفاشلة على Windows",
    "en": "Windows failed logon investigation"
  },
  "image": {
    "ar": "assets/soc-windows-logon/pages-ar/page-1.png",
    "en": "assets/soc-windows-logon/pages-en/page-1.png"
  },
  "status": "complete",
  "statusText": {
    "ar": "مكتمل",
    "en": "Completed"
  },
  "tags": [
    "SOC L1",
    "Splunk",
    "Windows Logs",
    "Failed Logons",
    "Detection"
  ],
  "cardTags": [
    "Splunk",
    "Windows Logs",
    "Failed Logons",
    "Detection"
  ],
  "desc": {
    "ar": "محاكاة عملية لطريقة عمل محلل SOC مبتدئ: أنشأت محاولات دخول فاشلة، راجعت سجلات Windows، ثم استخدمت Splunk لبناء تنبيه عند تكرار المحاولات.",
    "en": "A beginner-friendly SOC lab: I generated failed sign-ins, reviewed the Windows logs, then used Splunk to build an alert for repeated attempts."
  },
  "cardDesc": {
    "ar": "محاكاة مبسطة لمسار التحقيق: توليد محاولات فاشلة، مراجعة السجلات، ثم بناء تنبيه في Splunk.",
    "en": "A simplified SOC workflow: generate failed logons, review the logs, then build a Splunk alert."
  },
      "contribution": {
        "ar": "أنشأت محاولات الدخول الفاشلة بنفسي، تحققت من Event ID 4625، صدّرت الأحداث إلى Splunk عبر CSV، ثم بنيت استعلام الكشف والتنبيه المجدول.",
        "en": "I generated the failed logons, verified Event ID 4625, exported the events to Splunk via CSV, and built the detection query and scheduled alert myself."
      },
  "gallery": [
    [
      "assets/soc-windows-logon/evidence-01-account-creation.jpg",
      {
        "ar": "إنشاء الحساب التجريبي soclab وتوليد أول محاولة دخول فاشلة عبر runas.",
        "en": "Creating the test account soclab and generating the first failed logon via runas."
      }
    ],
    [
      "assets/soc-windows-logon/evidence-02-event-viewer-4625.jpg",
      {
        "ar": "تحليل Event ID 4625 داخل Event Viewer: TargetUser، Status/SubStatus.",
        "en": "Analyzing Event ID 4625 in Event Viewer: TargetUser, Status/SubStatus."
      }
    ],
    [
      "assets/soc-windows-logon/evidence-03-powershell-getwinevent.jpg",
      {
        "ar": "قراءة نفس الحدث عبر Get-WinEvent في PowerShell للتأكد أن نفس البيانات متاحة من أكثر من أداة.",
        "en": "Reading the same event via Get-WinEvent in PowerShell to confirm the same data is accessible from more than one tool."
      }
    ],
    [
      "assets/soc-windows-logon/evidence-04-splunk-detection.jpg",
      {
        "ar": "نتيجة استعلام SPL: نافذتان زمنيتان من 5 دقائق بهما 5 و6 محاولات دخول فاشلة.",
        "en": "SPL query result: two 5-minute windows with 5 and 6 failed logon attempts respectively."
      }
    ],
    [
      "assets/soc-windows-logon/evidence-05-scheduled-alert.jpg",
      {
        "ar": "حفظ البحث كتنبيه مجدول Repeated Failed Logons - Windows، يعمل كل 5 دقائق.",
        "en": "Saving the search as the scheduled alert Repeated Failed Logons - Windows, running every 5 minutes."
      }
    ]
  ],
  "details": {
    "ar": [
      [
        "01 — نظرة عامة",
        "لاب تعليمي يحاكي طريقة عمل محلل SOC L1: توليد حدث فشل تسجيل دخول حقيقي على Windows، فهمه يدويًا، إدخاله إلى Splunk، ثم بناء كشف وتنبيه مجدول عليه. الهدف إثبات فهم المسار كاملًا: Event → Investigation → Detection → Alert، وليس الادعاء بوجود هجوم فعلي على الجهاز."
      ],
      [
        "02 — البيئة والأدوات",
        "Windows كمصدر للسجلات (Event Viewer وPowerShell للتحليل المحلي)، وSplunk Enterprise مُشغّل محليًا داخل Kali Linux VMware (لأن تسجيل Splunk Cloud لم يكتمل أثناء التجربة). تشغيل Splunk بصلاحية root مقبول للاب محلي فقط، وليس مناسبًا لبيئة إنتاج."
      ],
      [
        "03 — توليد الحدث والتحليل اليدوي",
        "أنشئ حساب Windows محلي تجريبي باسم <code>soclab</code> عبر <code>net user soclab * /add</code>، ثم استُخدم <code>runas</code> بكلمة مرور خاطئة لتوليد Event ID <code>4625</code>. حُلّل الحدث في Event Viewer (Subject، TargetUser، Logon Type 2، Status/SubStatus)، ثم أُعيدت قراءته بـ PowerShell عبر <code>Get-WinEvent</code> للتأكد أن نفس البيانات الأمنية متاحة من أكثر من أداة، ثم حُوّل الحدث إلى XML لرؤية الحقول المنظمة (TargetUserName، LogonType، IpAddress) تمهيدًا لاستخدامها في SIEM."
      ],
      [
        "04 — التصدير إلى Splunk",
        "صُدّرت آخر 50 حدث Event ID 4625 عبر PowerShell إلى ملف <code>failed_logons.csv</code> يحتوي الحقول: الوقت، Event ID، المستخدم المستهدف، Logon Type، Source IP، Status، SubStatus. رُفع الملف إلى Splunk عبر Add Data → Upload كـ Source Type من نوع CSV. البيانات هنا لم تصل Live من Windows إلى Splunk؛ الإدخال تم عبر ملف وليس Universal Forwarder — وهذا فرق أذكره بوضوح لأنه يغيّر نطاق المشروع من هندسة جمع السجلات إلى التحليل والكشف."
      ],
      [
        "05 — الكشف (SPL) والتنبيه المجدول",
        "بُني استعلام يجمع المحاولات في نوافذ زمنية من 5 دقائق (<code>bin _time span=5m</code>) بدل عدّها عبر كامل التاريخ، ثم يعرض فقط النوافذ التي تحتوي 5 محاولات فاشلة أو أكثر لنفس المستخدم/المصدر/نوع الدخول:<br><code>index=main source=\"failed_logons.csv\" EventID=4625 | bin _time span=5m | stats count as FailedAttempts by _time TargetUser SourceIP LogonType Status SubStatus | where FailedAttempts &gt;= 5 | sort - _time</code><br>ظهرت نافذتان بـ 5 و6 محاولات. حُفظ البحث كتنبيه مجدول باسم <strong>Repeated Failed Logons - Windows</strong> يعمل كل 5 دقائق ويفحص آخر 5 دقائق من البيانات."
      ],
      [
        "06 — التفكير كمحلل SOC وحدود المشروع",
        "النتيجة تُعامَل كإشارة تستحق التحقيق، وليست إثباتًا تلقائيًا على Brute Force — القرار النهائي يحتاج سياقًا إضافيًا: المصدر، الحساب، وهل حدث تسجيل دخول ناجح بعدها. في بيئة شركة حقيقية كانت الخطوة التالية ستشمل مراجعة Event ID 4624 للنجاح اللاحق، مقارنة النشاط بسلوك المستخدم المعتاد، وفحص IAM/VPN/EDR logs إن توفرت.<br><br><strong>ماذا يعني AI-Assisted Development هنا؟</strong> لا يخص واجهة عرض البورتفوليو فقط، ولا يعني أن AI نفّذ التحليل الأمني بدلًا مني. استخدمت أدوات AI كمساعد أثناء بناء خطوات اللاب، مراجعة بعض الأوامر واستعلام SPL، واستكشاف الأخطاء. أما التحقق من Event ID 4625 وحقوله ونتائج Splunk وربطها بمنطق الكشف فتم داخل الأدوات نفسها، مع فهم وتوثيق القرارات والقيود بنفسي."
      ]
    ],
    "en": [
      [
        "01 — Overview",
        "A hands-on lab that mirrors a SOC L1 analyst's workflow: generate a real Windows failed-logon event, understand it manually, ingest it into Splunk, then build a detection and scheduled alert on top of it. The goal is to demonstrate the full pipeline — Event → Investigation → Detection → Alert — not to claim an actual attack occurred on the machine."
      ],
      [
        "02 — Environment & tools",
        "Windows as the log source (Event Viewer and PowerShell for local analysis), with Splunk Enterprise running locally inside a Kali Linux VMware VM, since Splunk Cloud registration wasn't completed during the exercise. Running Splunk as root is acceptable for this local lab only, not for a production environment."
      ],
      [
        "03 — Generating and manually analyzing the event",
        "A local test account <code>soclab</code> was created via <code>net user soclab * /add</code>, then <code>runas</code> with a wrong password was used to trigger Event ID <code>4625</code>. The event was analyzed in Event Viewer (Subject, TargetUser, Logon Type 2, Status/SubStatus), then re-read with PowerShell via <code>Get-WinEvent</code> to confirm the same security data is accessible from more than one tool, then converted to XML to see the structured fields (TargetUserName, LogonType, IpAddress) ahead of using them in a SIEM."
      ],
      [
        "04 — Exporting into Splunk",
        "The last 50 Event ID 4625 events were exported via PowerShell to <code>failed_logons.csv</code>, containing Time, Event ID, TargetUser, Logon Type, Source IP, Status, and SubStatus. The file was uploaded to Splunk via Add Data → Upload with a CSV source type. Data did not arrive live from Windows into Splunk; ingestion was file-based rather than via a Universal Forwarder — a distinction I call out explicitly since it shifts the project's scope from log-collection engineering toward analysis and detection."
      ],
      [
        "05 — Detection (SPL) and scheduled alert",
        "A query buckets attempts into 5-minute windows (<code>bin _time span=5m</code>) instead of counting across the full history, then surfaces only windows with 5 or more failed attempts for the same user/source/logon type:<br><code>index=main source=\"failed_logons.csv\" EventID=4625 | bin _time span=5m | stats count as FailedAttempts by _time TargetUser SourceIP LogonType Status SubStatus | where FailedAttempts &gt;= 5 | sort - _time</code><br>Two windows surfaced, with 5 and 6 attempts. The search was saved as a scheduled alert named <strong>Repeated Failed Logons - Windows</strong>, running every 5 minutes over the last 5 minutes of data."
      ],
      [
        "06 — SOC reasoning and project limitations",
        "The result is treated as a signal worth investigating, not automatic proof of brute force — the final call needs more context: the source, the account, and whether a successful logon followed. In a real company environment, next steps would include reviewing Event ID 4624 for a subsequent success, comparing the activity against the user's normal behavior, and checking IAM/VPN/EDR logs where available.<br><br><strong>What does AI-Assisted Development mean here?</strong> It is not limited to the portfolio presentation layer, and it does not mean AI performed the security analysis for me. I used AI tools as an assistant while building the lab steps, reviewing some commands and the SPL query, and troubleshooting. Verification of Event ID 4625, its fields, Splunk results, and the detection logic was performed in the tools themselves, with the reasoning, limitations, and decisions understood and documented by me."
      ]
    ]
  },
  "summaryFindings": [
    [{"ar":"Event ID المستخدم","en":"Event ID used"},"4625 — Failed Logon"],
    [{"ar":"نافذة الكشف","en":"Detection window"},"5 minutes"],
    [{"ar":"العتبة (Threshold)","en":"Threshold"},"≥ 5 failed attempts"],
    [{"ar":"جدولة التنبيه","en":"Alert schedule"},"Every 5 minutes"],
    [{"ar":"طريقة الإدخال إلى Splunk","en":"Splunk ingestion method"},"CSV upload (not live forwarder)"],
    [{"ar":"بيئة التشغيل","en":"Environment"},"Kali Linux VM + Splunk Enterprise (local trial)"]
  ],
  "link": "resources/pdf-viewer.html?doc=windows-failed-logon",
  "download": {
    "ar": "assets/soc-windows-logon/Windows_Failed_Logon_Splunk_Lab_AR.pdf",
    "en": "assets/soc-windows-logon/Windows_Failed_Logon_Splunk_Lab_EN.pdf"
  },
  "downloadLabel": {
    "ar": "تحميل المستند التقني الكامل",
    "en": "Download full technical document"
  }
}
  ],
  "resources": [
    {
      "title": {
        "ar": "ملخصات أوامر اختبار الاختراق",
        "en": "Penetration Testing Command Notes"
      },
      "tags": [
        "Learning Resources",
        "Documentation",
        "Cybersecurity"
      ],
      "desc": {
        "ar": "مكتبة شخصية للمراجعة السريعة أثناء التعلم والمختبرات، تنظّم الأوامر والملاحظات التي أرجع إليها داخل البيئات المصرح بها.",
        "en": "A personal quick-reference library for learning and lab work, organizing commands and notes I use in authorized environments."
      },
      "href": {
        "ar": "resources/library.html",
        "en": "resources/library-en.html"
      },
      "download": {
        "ar": "resources/Pentest_Cheat_Sheets_AR.zip",
        "en": "resources/Pentest_Cheat_Sheets_EN.zip"
      },
      "count": 92
    }
  ],
  "experience": [
    {
      "logo": "assets/experience/rehlat-alwadi-trim.png",
      "title": {
        "ar": "فني نظم حاسب آلي",
        "en": "Computer Systems Technician"
      },
      "org": {
        "ar": "رحلات الوادي للنقل",
        "en": "Rehlat Al Wadi Transport Est."
      },
      "date": {
        "ar": "ديسمبر 2024 — الآن",
        "en": "Dec 2024 - Present"
      },
      "summary": {
        "ar": "أدعم استمرارية عمليات الفروع من خلال متابعة اتصال الشبكة وصيانة أجهزة العمل وطابعات الباركود، مع حماية سجلات الشحن والعملاء وتنفيذ النسخ الاحتياطي الدوري، إضافة إلى الدعم الفني الميداني.",
        "en": "Support branch operational continuity by monitoring network connectivity and maintaining work devices and barcode printers, while protecting shipment and customer records through periodic backups and providing on-site technical support."
      },
      "tasks": [
        {"ar":"صيانة واستكشاف أعطال أجهزة العمل وطابعات الباركود عبر عمليات الفروع، بما يقلل توقف المعدات.","en":"Maintain and troubleshoot work devices and barcode printers across branch operations, reducing equipment downtime."},
        {"ar":"دعم ومراقبة اتصال الشبكة بين الفروع لضمان استمرارية عمليات تتبع الشحنات.","en":"Support and monitor network connectivity between branches, ensuring uninterrupted shipment-tracking operations."},
        {"ar":"تقديم دعم فني ميداني لموظفي الفروع ومعالجة مشكلات الأجهزة والبرامج بسرعة.","en":"Provide on-site technical support to branch staff, resolving hardware and software issues quickly."},
        {"ar":"تأمين سجلات الشحن والعملاء وتنفيذ نسخ احتياطي دوري ضمن ممارسات حماية البيانات.","en":"Secure shipment and customer records and run periodic data backups as part of routine data-protection practice."}
      ]
    }
  ],
  "education": [
    {
      "logo": "assets/education/psau-logo-v2.png",
      "degree": {
        "ar": "دبلوم أمن المعلومات",
        "en": "Diploma in Information Security"
      },
      "school": {
        "ar": "جامعة الأمير سطام بن عبدالعزيز — الكلية التطبيقية",
        "en": "Prince Sattam bin Abdulaziz University — Applied College"
      },
      "year": {
        "ar": "2022 — 2024",
        "en": "2022 - 2024"
      },
      "state": {
        "ar": "مكتمل / خريج",
        "en": "Completed / Graduate"
      },
      "gpa": {
        "ar": "المعدل 4.00 / 5.00",
        "en": "GPA 4.00 / 5.00"
      },
      "certificateHref": "resources/diploma-certificate.html"
    },
    {
      "logo": "assets/education/prince-musaid-logo.png",
      "degree": {
        "ar": "بكالوريوس تقنية المعلومات",
        "en": "Bachelor of Information Technology (In Progress)"
      },
      "school": {
        "ar": "جامعة الأمير مساعد بن عبدالرحمن",
        "en": "Prince Musaid bin Abdulrahman University"
      },
      "former": {
        "ar": "سابقًا: الجامعة السعودية الإلكترونية",
        "en": "formerly: Saudi Electronic University"
      },
      "year": {
        "ar": "متوقع 2029",
        "en": "Expected 2029"
      },
      "state": {
        "ar": "قيد الدراسة",
        "en": "In progress"
      }
    }
  ],
  "toolkit": [
    {
      "title": {"ar": "تقنية المعلومات والدعم", "en": "IT & Support"},
      "items": [
        {"ar":"بيئات Windows وتقنية المعلومات","en":"Windows / IT environments"},
        {"ar":"دعم الأجهزة","en":"Device support"},
        {"ar":"استكشاف الأعطال التقنية","en":"Troubleshooting"},
        {"ar":"أساسيات الشبكات","en":"Networking fundamentals"},
        {"ar":"النسخ الاحتياطي وحماية البيانات","en":"Backup / data protection"}
      ]
    },
    {
      "title": {"ar": "الأمن السيبراني", "en": "Cybersecurity"},
      "items": [
        {"ar":"تحليل حركة الشبكة وربط الأدلة (PCAP / Wireshark)","en":"Network traffic analysis & evidence correlation (PCAP/Wireshark)"},
        {"ar":"بناء قواعد كشف وتنبيهات أمنية (Splunk)","en":"Building security detections & alerts (Splunk)"},
        {"ar":"فرز التنبيهات والتحقيق الأولي في الحوادث","en":"Alert triage & initial incident investigation"},
        {"ar":"مراقبة الأحداث الأمنية وتحليل السجلات","en":"Security event monitoring & log analysis"}
      ]
    },
    {
      "title": {"ar": "أستخدمها في مشاريعي", "en": "Used in my projects"},
      "items": [
        {"ar":"Wireshark","en":"Wireshark"},
        {"ar":"Splunk","en":"Splunk"},
        {"ar":"Windows Event Logs","en":"Windows Event Logs"},
        {"ar":"PowerShell","en":"PowerShell"}
      ]
    },
    {
      "title": {"ar": "تعرّض مخبري", "en": "Lab exposure"},
      "items": [
        {"ar":"Kali Linux","en":"Kali Linux"},
        {"ar":"Nmap","en":"Nmap"},
        {"ar":"Hydra","en":"Hydra"},
        {"ar":"Metasploit","en":"Metasploit"},
        {"ar":"Burp Suite","en":"Burp Suite"}
      ]
    },
    {
      "title": {"ar": "أتعلمه حاليًا", "en": "Current Learning"},
      "learning": true,
      "items": [
        {"ar":"تطبيق عملي لاختبار الاختراق ضمن مختبرات محاكاة","en":"Applied penetration testing in simulated labs"},
        {"ar":"تعمّق في أدوات المختبر (Nmap، Metasploit، Burp Suite)","en":"Going deeper with lab tools (Nmap, Metasploit, Burp Suite)"},
        {"ar":"توثيق الثغرات وكتابة تقارير فنية","en":"Vulnerability documentation & technical reporting"},
        {"ar":"eJPT — قيد التحضير، متوقع نوفمبر 2026","en":"eJPT — In progress, expected November 2026"}
      ]
    }
  ],
  "recommendations": [
    {
      "name": "Prof. Abdalla Abdarahim Alameen",
      "href": "resources/recommendation-alameen.html",
      "context": {
        "ar": "خطاب أكاديمي مرتبط بمقررات أمن البرمجيات والتشفير وأمن الشبكات وأساسيات أمن الحاسب.",
        "en": "Academic letter connected to Software Security, Cryptography, Network & Web Security, and Computer Security Fundamentals."
      }
    },
    {
      "name": "Dr. Mohammad Mubark Aldossary",
      "href": "resources/recommendation-aldossary.html",
      "context": {
        "ar": "خطاب أكاديمي مرتبط بمقرر إدارة المخاطر بشقيه النظري والعملي.",
        "en": "Academic letter connected to theoretical and practical Risk Management coursework."
      }
    }
  ]
};


const COPY = {
  ar: {
    nav: [
      ['about', 'نبذة'], ['skills', 'المهارات'], ['certifications', 'الدورات'], ['projects', 'المشاريع'],
      ['education-experience', 'التعليم والخبرة'], ['resources', 'المصادر'], ['contact', 'تواصل']
    ],
    skip: 'تجاوز إلى المحتوى',
    role: 'فني نظم حاسب آلي <span aria-hidden="true">←</span> أطمح لمسار <bdi dir="ltr">SOC / Blue Team</bdi>',
    message: 'أطوّر خبرتي في الدعم التقني عبر تطبيقات عملية في <bdi dir="ltr">SOC / Blue Team</bdi> ضمن مساري الأمني.',
    contactCta: 'تواصل معي', cvCta: 'معاينة السيرة الذاتية', saudiBrand: 'سعودي',
    aboutLabel: 'نبذة', aboutTitle: 'من أنا؟',
    aboutText: 'بعد تخرجي بدبلوم أمن المعلومات، بدأت مسيرتي العملية بصفتي فني نظم حاسب آلي، وأواصل حاليًا دراسة بكالوريوس تقنية المعلومات كتخصص منفصل وموازٍ. ومع اهتمامي بالأمن السيبراني، أطبّق ما أتعلمه عبر تحليل الشبكات والسجلات والمختبرات العملية.',
    skillsLabel: 'المهارات', skillsTitle: 'الأساس العملي والأدوات', skillsIntro: 'خبرة عملية في الدعم التقني، تحليل الشبكات والسجلات، وأدوات الأمن المستخدمة في المختبرات.',
    currentLearning: 'أتعلمه حاليًا',
    certLabel: 'الدورات', certTitle: 'الدورات وورش التدريب', certIntro: 'شهادات لورش ودورات تدريبية.', certStatus: 'دورة تدريب', allCerts: n => `عرض كل الدورات (${n})`, proTitle: 'شهادة مهنية معتمدة',
    projectsLabel: 'المشاريع', contributionLabel: 'مساهمتي', projectsTitle: 'دراسات حالة SOC / Blue Team', projectsIntro: 'دراسات حالة عملية في تحليل الشبكات والسجلات والتحقيق وبناء التنبيهات الأمنية.', viewCase: 'عرض دراسة الحالة',
    additionalLabel: 'مشاريع إضافية', additionalTitle: 'أدوات طورتها', additionalIntro: 'أدوات ومشاريع إضافية طورتها لدعم التعلم والعمل التقني.', viewDetails: 'عرض التفاصيل',
    timelineLabel: 'التعليم والخبرة', timelineTitle: 'التعليم والخبرة التقنية', timelineIntro: 'المؤهلات الأكاديمية والخبرة العملية المرتبطة بمساري التقني.', educationColumnTitle: 'التعليم', experienceColumnTitle: 'الخبرة التقنية', experienceScope: 'يعرض هذا القسم الخبرة المرتبطة بمساري التقني فقط؛ بقية الخبرات العملية خارج المجال موثقة بالتفصيل داخل السيرة الذاتية.', recommendations: 'خطابات أكاديمية من دراسة الدبلوم', viewRecommendation: 'استعراض خطاب', viewCertificate: 'عرض الوثيقة',
    resourcesLabel: 'المصادر', resourcesTitle: 'مكتبة التدريب', resourceCardTitle: 'استعرض مكتبة Cheat Sheets', resourceCardText: 'مكتبة ملاحظات وأوامر سريعة للمراجعة أثناء التعلم والعمل داخل المختبرات المصرح بها.', library: 'مكتبة Cheat Sheets',
    contactLabel: 'تواصل', contactTitle: 'للتواصل المهني', contactIntro: 'يمكن التواصل عبر البريد، الهاتف، LinkedIn أو WhatsApp.', email: 'البريد الإلكتروني', phone: 'الهاتف', linkedin: 'LinkedIn', whatsapp: 'واتساب',
    copyEmail: 'نسخ البريد الإلكتروني', sendEmail: 'إرسال بريد', copyPhone: 'نسخ الرقم', call: 'اتصال', copied: 'تم النسخ',
    modalEvidence: 'الأدلة والصور', openDoc: 'استعراض الملف', downloadDoc: 'تنزيل الملف', close: 'إغلاق', cvTitle: 'السيرة الذاتية', cvStatus: 'معاينة داخل الموقع', cvDownload: 'تحميل النسخة المعروضة',
    footer: 'جميع الحقوق محفوظة.'
  },
  en: {
    nav: [
      ['about', 'About'], ['skills', 'Skills'], ['certifications', 'Courses'], ['projects', 'Projects'],
      ['education-experience', 'Education & Experience'], ['resources', 'Resources'], ['contact', 'Contact']
    ],
    skip: 'Skip to content',
    role: 'Computer Systems Technician → Aspiring SOC Analyst / Blue Team',
    message: 'I build on my IT support experience through hands-on practice in SOC and Blue Team work.',
    contactCta: 'Contact me', cvCta: 'Preview Resume', saudiBrand: 'Saudi',
    aboutLabel: 'About', aboutTitle: 'About Me',
    aboutText: 'After graduating with a Diploma in Information Security, I began my hands-on career as a Computer Systems Technician. I am currently pursuing a Bachelor’s degree in Information Technology as a separate, parallel academic path. My interest in cybersecurity has led me to practice network and log analysis through hands-on labs.',
    skillsLabel: 'Skills', skillsTitle: 'Practical foundation & tools', skillsIntro: 'Hands-on experience across IT support, network and log analysis, and security tools used in practical labs.',
    currentLearning: 'Currently learning',
    certLabel: 'Courses', certTitle: 'Courses & Training', certIntro: 'Certificates from workshops and training courses.', certStatus: 'Course / Training', allCerts: n => `View all courses (${n})`, proTitle: 'Professional certification',
    projectsLabel: 'Projects', contributionLabel: 'My contribution', projectsTitle: 'SOC / Blue Team case studies', projectsIntro: 'Hands-on case studies in network and log analysis, investigation, and security alerting.', viewCase: 'View case study',
    additionalLabel: 'Additional Work', additionalTitle: 'Tools I built', additionalIntro: 'Additional tools and projects I built to support practical learning and technical work.', viewDetails: 'View details',
    timelineLabel: 'Education & Experience', timelineTitle: 'Education & technical experience', timelineIntro: 'Academic qualifications and practical experience related to my technical path.', educationColumnTitle: 'Education', experienceColumnTitle: 'Technical Experience', experienceScope: 'This section shows only experience relevant to my technical path; additional work experience outside the field is documented in detail in my CV.', recommendations: 'Academic letters from my diploma studies', viewRecommendation: 'View letter', viewCertificate: 'View document',
    resourcesLabel: 'Resources', resourcesTitle: 'Learning library', resourceCardTitle: 'Browse my Cheat Sheets library', resourceCardText: 'A quick-reference library of notes and commands for learning and work in authorized lab environments.', library: 'Cheat Sheets library',
    contactLabel: 'Contact', contactTitle: 'Professional contact', contactIntro: 'Reach me by email, phone, LinkedIn, or WhatsApp.', email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', whatsapp: 'WhatsApp',
    copyEmail: 'Copy email', sendEmail: 'Send email', copyPhone: 'Copy number', call: 'Call', copied: 'Copied',
    modalEvidence: 'Evidence & screenshots', openDoc: 'Preview document', downloadDoc: 'Download file', close: 'Close', cvTitle: 'Resume / CV', cvStatus: 'In-page preview', cvDownload: 'Download displayed version',
    footer: 'All rights reserved.'
  }
};

const $ = id => document.getElementById(id);
const readStoredLang = () => { try { return localStorage.getItem('portfolio-lang'); } catch (_) { return null; } };
const writeStoredLang = value => { try { localStorage.setItem('portfolio-lang', value); } catch (_) {} };
const storedLang = readStoredLang();
const queryLang = new URLSearchParams(location.search).get('lang');
let lang = queryLang === 'ar' || queryLang === 'en' ? queryLang : (storedLang === 'ar' || storedLang === 'en' ? storedLang : 'en');
const CV_FILES = {
  ar: 'assets/Abdullah_Nasser_AlMsan_CV_AR.pdf',
  en: 'assets/Abdullah_Nasser_AlMsan_CV_EN.pdf'
};
let cvDisplayedVersion = 'en';
let lastModalTrigger = null;
const t = value => typeof value === 'string' ? value : (value?.[lang] ?? value?.en ?? value?.ar ?? '');
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const projectById = id => DATA.projects.find(project => project.id === id);
const mainProjectIds = ['soc-windows-failed-logon', 'soc-asrep-roasting', 'soc-network-traffic'];
const additionalProjectIds = ['penguide', 'penguide-support'];

const ICONS = {
  mail: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
  phone: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 3.5 9 3l2 5-2.2 1.5a14.2 14.2 0 0 0 5.7 5.7L16 13l5 2-0.5 2.4a3 3 0 0 1-3.2 2.4C10.4 19 5 13.6 4.2 6.7A3 3 0 0 1 6.6 3.5Z"/></svg>',
  whatsapp: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8.5c.4 2.7 2 4.3 4.6 5.2l1.3-1.2 2 .9c-.3 1.4-1.2 2.2-2.6 2.3-3.5.2-7.1-3.4-7-6.9.1-1.4.9-2.3 2.3-2.6l.9 2L9 8.5Z"/></svg>',
  linkedin: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10v6M8 8v.01M12 16v-3.2c0-1.6 2-2 3-1.2.6.5.8 1.2.8 2.1V16M12 11v5"/></svg>',
  copy: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
  'external-link': '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  download: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v11M8 11l4 4 4-4"/><path d="M5 19h14"/></svg>',
  call: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 4h3l1 4-2 1.5a12 12 0 0 0 5.5 5.5L16 13l4 1v3c0 1.7-1.3 3-3 3A13 13 0 0 1 4 7c0-1.7 1.3-3 3-3Z"/></svg>',
  book: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>',
  terminal: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>',
  briefcase: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2"/></svg>',
  education: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11.2V16c2.8 2.2 7.2 2.2 10 0v-4.8M21 9v6"/></svg>',
  case: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 4h7l4 4v12H7z"/><path d="M14 4v5h5M10 13h5M10 16h5"/></svg>',
  eye: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>'
};

function icon(name) {
  return ICONS[name] || '';
}

function actionContent(iconName, label, trailingIcon = '') {
  return `${icon(iconName)}<span>${esc(label)}</span>${trailingIcon ? icon(trailingIcon) : ''}`;
}

function gmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

function localizedMedia(value) {
  return typeof value === 'string' ? value : t(value);
}

function appendQueryParam(url, key, value) {
  if (!url || !key) return url;
  const [base, hash = ''] = String(url).split('#');
  const joiner = base.includes('?') ? '&' : '?';
  const pattern = new RegExp(`([?&])${key}=[^&#]*`);
  const next = pattern.test(base)
    ? base.replace(pattern, `$1${key}=${encodeURIComponent(value)}`)
    : `${base}${joiner}${key}=${encodeURIComponent(value)}`;
  return hash ? `${next}#${hash}` : next;
}

function localizedProjectDocUrl(url) {
  if (!url) return url;
  return /pdf-viewer\.html(?:$|[?#])/.test(url) ? appendQueryParam(url, 'lang', lang) : url;
}

function projectImage(project) {
  if (project.image) return localizedMedia(project.image);
  const first = project.gallery?.[0]?.[0];
  return localizedMedia(first);
}

function setText(id, value) {
  const node = $(id);
  if (node) node.textContent = value;
}

function renderNav(copy) {
  $('mainNav').innerHTML = copy.nav.map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join('');
}

function renderSkills(copy) {
  const cards = DATA.toolkit.map((group, index) => ({ group, index }));
  const hoverBadges = [
    [
      { label: 'Windows', icon: 'assets/brands/windows.png' },
      { label: 'Support', icon: 'assets/brands/support.svg' },
      { label: 'Networking', icon: 'assets/brands/networking.svg' }
    ],
    [
      { label: 'Wireshark', icon: 'assets/brands/wireshark.svg' },
      { label: 'Splunk', icon: 'assets/brands/splunk.svg' },
      { label: 'SOC', icon: 'assets/brands/soc.svg' }
    ],
    [
      { label: 'Wireshark', icon: 'assets/brands/wireshark.svg' },
      { label: 'Splunk', icon: 'assets/brands/splunk.svg' },
      { label: 'PowerShell', icon: 'assets/brands/windows.png' }
    ],
    [
      { label: 'Kali Linux', icon: 'assets/brands/kali-linux.svg' },
      { label: 'Metasploit', icon: 'assets/brands/metasploit.svg' },
      { label: 'Nmap', icon: 'assets/brands/nmap.svg' }
    ],
    [
      { label: 'eJPT', icon: 'assets/brands/ejpt.png' },
      { label: 'Labs', icon: 'assets/brands/labs.svg' },
      { label: 'Reports', icon: 'assets/brands/reports.svg' }
    ]
  ];
  $('skillsGrid').innerHTML = cards.map(({ group, index }) => {
    const badges = (hoverBadges[index] || []).map((badge, badgeIndex) => `
      <span class="brand-chip brand-chip--slot-${badgeIndex + 1}">
        <span class="brand-chip__icon-wrap"><img class="brand-chip__icon brand-chip__icon--mono" src="${badge.icon}" alt="" loading="lazy" decoding="async"></span>
        <span class="brand-chip__label">${esc(badge.label)}</span>
      </span>`).join('');
    return `<article class="skill-card motion-card skill-card--motion-${index + 1}">
      <span class="skill-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      <h3>${esc(t(group.title))}</h3>
      <div class="skill-list">${group.items.map(item => `<span class="skill-tag">${esc(t(item))}</span>`).join('')}</div>
      <div class="skill-brand-row" aria-hidden="true">${badges}</div>
      <span class="motion-line" aria-hidden="true"></span>
    </article>`;
  }).join('');
}
function renderProfessionalCertRows(copy) {
  const host = $('proCerts');
  if (!host) return;
  const items = Array.isArray(window.PRO_CERTS) ? window.PRO_CERTS : [];
  if (!items.length) { host.replaceChildren(); host.hidden = true; return; }
  host.hidden = false;
  host.innerHTML = `<h3 class="pro-certs-title">${esc(copy.proTitle)}</h3><div class="pro-certs-list">${items.map(cert => {
    const date = cert.date ? `<span>${esc(cert.date)}</span>` : '';
    const credential = cert.credentialUrl ? `<a class="pro-cert-verify" href="${esc(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer">${lang === 'ar' ? 'تحقق' : 'Verify'}</a>` : '';
    const id = cert.credentialId ? `<span>${esc(cert.credentialId)}</span>` : '';
    const visual = cert.logo || cert.image;
    return `<article class="pro-cert-row">${visual ? `<img src="${esc(visual)}" alt="" loading="lazy">` : ''}<div><strong>${esc(t(cert.title))}</strong><span>${esc(cert.issuer || '')}</span><small>${[date,id,credential].filter(Boolean).join(' · ')}</small></div></article>`;
  }).join('')}</div>`;
}

const CERT_TYPE_LABELS = {
  ar: { credential: 'اعتماد بعد اختبار', training: 'دورة تدريب', attendance: 'حضور' },
  en: { credential: 'Exam-based credential', training: 'Course / Training', attendance: 'Attendance' }
};
function certificateTypeBadge(cert) {
  const type = cert.type || 'training';
  const label = CERT_TYPE_LABELS[lang]?.[type] || type;
  return `<span class="cert-type cert-type--${esc(type)}">${esc(label)}</span>`;
}
function projectCover(id, title) {
  const tool = id === 'soc-network-traffic'
    ? { label: 'Wireshark', icon: 'assets/brands/wireshark.svg' }
    : { label: 'Splunk', icon: 'assets/brands/splunk.svg' };
  return `<div class="project-cover" aria-label="${esc(title)}"><span class="project-cover-orb" aria-hidden="true"></span><img class="project-cover-icon project-cover-icon--${tool.label.toLowerCase()}" src="${tool.icon}" alt="" loading="lazy"><span class="project-cover-tool">${esc(tool.label)}</span><h3>${esc(title)}</h3></div>`;
}

function renderCertifications(copy) {
  const certs = Array.isArray(window.CERTIFICATES) ? window.CERTIFICATES : [];
  const featured = certs.filter(cert => cert.featured).sort((a,b) => (a.priority ?? 999) - (b.priority ?? 999)).slice(0,6);
  $('certStrip').innerHTML = featured.map(cert => { const certTitle = t(cert.title); return `<a class="cert-item" href="certificates.html?lang=${lang}&from=certifications&cert=${encodeURIComponent(cert.id)}" aria-label="${esc(certTitle)}">
      <span class="cert-thumb"><img src="assets/certificates/${esc(cert.file)}" alt="${esc(certTitle)}" loading="lazy" onerror="this.closest('.cert-thumb').remove()"></span>
      <span class="cert-copy"><strong dir="auto">${esc(certTitle)}</strong>${certificateTypeBadge(cert)}<span class="cert-issuer">${esc(cert.issuer)}</span>${cert.hours ? `<small>${esc(cert.hours)}h</small>` : ''}</span>
    </a>`; }).join('');
  renderProfessionalCertRows(copy);
}
window.renderProfessionalCerts = () => renderProfessionalCertRows(COPY[lang]);

function renderProjects(copy) {
  $('projectsGrid').innerHTML = mainProjectIds.map(id => {
    const project = projectById(id);
    const tags = project.cardTags || project.tags || [];
    const visibleTags = tags.slice(0, 4);
    const overflowTag = tags.length > 4 ? `<span class="tag tag-more">+${tags.length - 4}</span>` : '';
    const cardTitle = t(project.cardTitle || project.title);
    const cardDesc = t(project.cardDesc || project.desc);
    const contribution = t(project.contribution || '');
    return `<article class="project-card">
      ${projectCover(id, cardTitle)}
      <div class="project-body">
        <p>${esc(cardDesc)}</p>
        ${contribution ? `<p class="project-contribution"><strong>${esc(copy.contributionLabel)}:</strong> ${esc(contribution)}</p>` : ''}
        <div class="tag-list">${visibleTags.map(tag => `<span class="tag">${esc(tag)}</span>`).join('')}${overflowTag}</div>
        <button class="btn btn-secondary open-project" type="button" data-project-id="${esc(id)}">${icon('case')}<span>${esc(copy.viewCase)}</span></button>
      </div>
    </article>`;
  }).join('');
}

function renderAdditional(copy) {
  $('additionalList').innerHTML = additionalProjectIds.map(id => {
    const project = projectById(id);
    return `<article class="additional-item">
      <img class="additional-thumb" src="${esc(projectImage(project))}" alt="" loading="lazy">
      <div class="additional-copy"><h3>${esc(t(project.title))}</h3><p>${esc(t(project.desc))}</p></div>
      <button class="mini-button open-project" type="button" data-project-id="${esc(id)}">${icon('case')}<span>${esc(copy.viewDetails)}</span></button>
    </article>`;
  }).join('');
}

function renderTimeline(copy) {
  const renderCareerItem = (item, kind) => {
    const title = kind === 'work' ? t(item.title) : t(item.degree);
    const org = kind === 'work'
      ? t(item.org)
      : [t(item.school), item.former ? t(item.former) : ''].filter(Boolean).join(' · ');
    const date = kind === 'work'
      ? t(item.date)
      : [t(item.year), t(item.state), item.gpa ? t(item.gpa) : ''].filter(Boolean).join(' · ');
    const summary = kind === 'work' ? t(item.summary) : '';

    return `<article class="career-entry career-entry--${kind}">
      <span class="career-dot" aria-hidden="true"></span>
      <div class="career-card">
        <div class="career-card-meta">
          <h4>${esc(title)}</h4>
          <span class="career-date">${esc(date)}</span>
        </div>
        <div class="career-org-line">${item.logo ? `<img class="career-org-logo" src="${esc(item.logo)}" alt="" aria-hidden="true" loading="lazy">` : ''}<p class="career-org">${esc(org)}</p></div>
        ${item.certificateHref ? `<a class="recommendation-link education-certificate-link" href="${esc(item.certificateHref)}?lang=${lang}" aria-label="${esc(copy.viewCertificate)} — ${esc(title)}">${icon('case')}<span>${esc(copy.viewCertificate)}</span></a>` : ''}
        ${summary ? `<p class="career-summary">${esc(summary)}</p>` : ''}
      </div>
    </article>`;
  };

  $('educationColumnIcon').innerHTML = icon('education');
  $('experienceColumnIcon').innerHTML = icon('briefcase');
  setText('educationColumnTitle', copy.educationColumnTitle);
  setText('experienceColumnTitle', copy.experienceColumnTitle);
  setText('experienceScope', copy.experienceScope);

  $('educationTimeline').innerHTML = DATA.education.map(item => renderCareerItem(item, 'education')).join('');
  $('experienceTimeline').innerHTML = DATA.experience.slice(0, 1).map(item => renderCareerItem(item, 'work')).join('');

  $('recommendations').innerHTML = `
    <span class="recommendations-label">${esc(copy.recommendations)}</span>
    <div class="recommendation-actions">
      ${DATA.recommendations.map(rec => { const buttonName = rec.href.includes('alameen') ? (lang === 'ar' ? 'البروفيسور عبدالله الأمين' : 'Prof. Abdullah Alameen') : (lang === 'ar' ? 'الدكتور محمد مبارك' : 'Dr. Mohammad Mubark'); return `<a class="recommendation-link" href="${esc(rec.href)}?lang=${lang}" aria-label="${esc(copy.viewRecommendation)} — ${esc(buttonName)}" title="${esc(buttonName)}">${icon('external-link')}<span>${esc(buttonName)}</span></a>`; }).join('')}
    </div>`;
}

function renderContact(copy) {
  const emailMenuId = 'emailContactMenu';
  const phoneMenuId = 'phoneContactMenu';
  $('contactGrid').innerHTML = `
    <div class="contact-item contact-menu-wrap">
      <button class="contact-card contact-menu-trigger" type="button" aria-expanded="false" aria-controls="${emailMenuId}">
        <span class="contact-icon-wrap">${icon('mail')}</span>
        <span class="contact-card-copy"><span class="contact-kicker">${esc(copy.email)}</span><strong dir="ltr">${esc(DATA.profile.email)}</strong></span>
        <span class="contact-caret" aria-hidden="true">⌄</span>
      </button>
      <div class="contact-dropdown" id="${emailMenuId}" hidden>
        <button class="contact-action" type="button" data-copy-value="${esc(DATA.profile.email)}">${icon('copy')}<span>${esc(copy.copyEmail)}</span></button>
        <a class="contact-action" href="${esc(gmailComposeUrl(DATA.profile.email))}" target="_blank" rel="noopener noreferrer">${icon('mail')}<span>${esc(copy.sendEmail)}</span>${icon('external-link')}</a>
      </div>
    </div>
    <div class="contact-item contact-menu-wrap">
      <button class="contact-card contact-menu-trigger" type="button" aria-expanded="false" aria-controls="${phoneMenuId}">
        <span class="contact-icon-wrap">${icon('phone')}</span>
        <span class="contact-card-copy"><span class="contact-kicker">${esc(copy.phone)}</span><strong dir="ltr">${esc(DATA.profile.phoneDisplay)}</strong></span>
        <span class="contact-caret" aria-hidden="true">⌄</span>
      </button>
      <div class="contact-dropdown" id="${phoneMenuId}" hidden>
        <button class="contact-action" type="button" data-copy-value="${esc(DATA.profile.phone)}">${icon('copy')}<span>${esc(copy.copyPhone)}</span></button>
        <a class="contact-action" href="tel:${esc(DATA.profile.phone)}">${icon('call')}<span>${esc(copy.call)}</span></a>
      </div>
    </div>
    <a class="contact-card contact-direct" href="${esc(DATA.profile.whatsapp)}" target="_blank" rel="noopener noreferrer">
      <span class="contact-icon-wrap">${icon('whatsapp')}</span>
      <span class="contact-card-copy"><strong>${esc(copy.whatsapp)}</strong></span>
      ${icon('external-link')}
    </a>
    <a class="contact-card contact-direct" href="${esc(DATA.profile.linkedin)}" target="_blank" rel="noopener noreferrer">
      <span class="contact-icon-wrap">${icon('linkedin')}</span>
      <span class="contact-card-copy"><span class="contact-kicker">${esc(copy.linkedin)}</span><strong>Abdullah AlMsan</strong></span>
      ${icon('external-link')}
    </a>`;
}

function render() {
  const copy = COPY[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = lang === 'ar' ? 'عبدالله ناصر المسن — فني نظم حاسب آلي → SOC / Blue Team' : 'Abdullah Nasser AlMsan — Computer Systems Technician → SOC / Blue Team';
  writeStoredLang(lang);

  setText('skipLink', copy.skip);
  renderNav(copy);
  $('heroRole').innerHTML = copy.role;
  setText('heroName', t(DATA.profile.name));
  $('heroMessage').innerHTML = copy.message;
  setText('heroSaudiBrand', copy.saudiBrand);
  setText('heroLocation', t(DATA.profile.location));
  $('contactCta').innerHTML = actionContent('mail', copy.contactCta);
  $('cvCta').innerHTML = actionContent('eye', copy.cvCta);

  setText('aboutLabel', copy.aboutLabel); setText('aboutTitle', copy.aboutTitle); setText('aboutText', copy.aboutText);
  setText('aboutFloatOne', t(DATA.toolkit[0].title)); setText('aboutFloatTwo', t(DATA.toolkit[1].title)); setText('aboutFloatThree', t(DATA.toolkit[3].title));
  setText('skillsLabel', copy.skillsLabel); setText('skillsTitle', copy.skillsTitle); setText('skillsIntro', copy.skillsIntro);
  renderSkills(copy);

  setText('certLabel', copy.certLabel); setText('certTitle', copy.certTitle); setText('certIntro', copy.certIntro); $('allCertsLink').innerHTML = actionContent('external-link', copy.allCerts((window.CERTIFICATES || []).length)); $('allCertsLink').href = `certificates.html?lang=${lang}&from=certifications`; 
  renderCertifications(copy);

  setText('projectsLabel', copy.projectsLabel); setText('projectsTitle', copy.projectsTitle); setText('projectsIntro', copy.projectsIntro);
  renderProjects(copy);

  setText('additionalLabel', copy.additionalLabel); setText('additionalTitle', copy.additionalTitle); setText('additionalIntro', copy.additionalIntro);
  renderAdditional(copy);

  setText('timelineLabel', copy.timelineLabel); setText('timelineTitle', copy.timelineTitle); setText('timelineIntro', copy.timelineIntro);
  renderTimeline(copy);

  setText('resourcesLabel', copy.resourcesLabel); setText('resourcesTitle', copy.resourcesTitle); setText('resourceCardTitle', copy.resourceCardTitle); setText('resourceCardText', copy.resourceCardText);
  $('libraryLink').innerHTML = actionContent('book', copy.library);
  $('libraryLink').href = lang === 'ar' ? 'resources/library.html' : 'resources/library-en.html';

  setText('contactLabel', copy.contactLabel); setText('contactTitle', copy.contactTitle); setText('contactIntro', copy.contactIntro);
  renderContact(copy);
  setupActiveNav();
  setText('footerName', t(DATA.profile.name));
  setText('footerYear', `© ${new Date().getFullYear()} · ${copy.footer}`);

  $('langBtn').textContent = lang === 'ar' ? 'EN' : 'AR';
  $('langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  $('menuBtn').setAttribute('aria-label', lang === 'ar' ? 'فتح قائمة التنقل' : 'Open navigation');
  $('modalClose').setAttribute('aria-label', copy.close); if ($('cvModal').classList.contains('open')) $('cvFrame').contentWindow?.postMessage({type:'portfolio-viewer-lang',lang}, '*');
  if ($('projectModal').classList.contains('open') && $('projectModal').dataset.projectId) openProject($('projectModal').dataset.projectId, lastModalTrigger, false);
}

const MOBILE_QUICK_ACTION_PROJECTS = new Set(['soc-network-traffic', 'soc-asrep-roasting', 'soc-windows-failed-logon']);

function projectLinkMarkup(project, copy) {
  const links = [];
  const projectLink = localizedProjectDocUrl(t(project.link));
  const download = t(project.download);
  if (projectLink) links.push(`<button class="btn btn-primary project-doc-preview" type="button" data-doc-src="${esc(projectLink)}">${icon('eye')}<span>${esc(t(project.docLabel) || copy.openDoc)}</span></button>`);
  if (download) links.push(`<button class="btn btn-secondary project-doc-download" type="button" data-download-src="${esc(download)}" data-download-name="${esc(String(download).split('/').pop())}">${icon('download')}<span>${esc(t(project.downloadLabel) || copy.downloadDoc)}</span></button>`);
  return links.join('');
}

function syncProjectQuickActions(projectId = $('projectModal')?.dataset.projectId) {
  const quick = $('modalQuickLinks');
  const regular = $('modalLinks');
  if (!quick || !regular) return;
  const mobile = window.matchMedia('(max-width: 620px)').matches;
  const useQuick = Boolean(mobile && MOBILE_QUICK_ACTION_PROJECTS.has(projectId) && quick.childElementCount);
  quick.hidden = !useQuick;
  regular.hidden = useQuick;
}

function renderProjectLinks(project, copy) {
  const markup = projectLinkMarkup(project, copy);
  $('modalLinks').innerHTML = markup;
  $('modalLinks').hidden = false;
  let quick = $('modalQuickLinks');
  if (!quick) {
    quick = document.createElement('div');
    quick.id = 'modalQuickLinks';
    quick.className = 'modal-links';
    quick.setAttribute('aria-label', lang === 'ar' ? 'إجراءات المستند السريعة' : 'Quick document actions');
    $('modalTags').insertAdjacentElement('afterend', quick);
  }
  quick.innerHTML = MOBILE_QUICK_ACTION_PROJECTS.has(project.id) ? markup : '';
  quick.setAttribute('aria-label', lang === 'ar' ? 'إجراءات المستند السريعة' : 'Quick document actions');
  syncProjectQuickActions(project.id);
}

function applyArabicModalLtr(root) {
  if (lang !== 'ar' || !root) return;
  const skip = new Set(['SCRIPT','STYLE','CODE','PRE','SVG']);
  const pattern = /(?:\b\d{4}-\d{2}-\d{2}(?:\s+\d{2}:\d{2}(?:\s+UTC)?)?\b|\b(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}\b|\b[A-Z][A-Z0-9._/-]{3,}\b|\b[A-Za-z][A-Za-z0-9._/-]*(?:\s+[A-Za-z][A-Za-z0-9._/:-]*){1,5}\b)/g;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode(node){
    const parent=node.parentElement;
    if(!parent || skip.has(parent.tagName) || parent.closest('.ltr-inline,[dir="ltr"]')) return NodeFilter.FILTER_REJECT;
    return /[A-Za-z0-9]/.test(node.nodeValue||'') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }});
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{const value=node.nodeValue||''; pattern.lastIndex=0; let m,last=0,hit=false; const frag=document.createDocumentFragment(); while((m=pattern.exec(value))){hit=true;if(m.index>last)frag.append(value.slice(last,m.index));const span=document.createElement('span');span.className='ltr-inline';span.textContent=m[0];frag.append(span);last=pattern.lastIndex;}if(hit){if(last<value.length)frag.append(value.slice(last));node.replaceWith(frag);}});
}

function openProject(projectId, trigger = null, changeFocus = true) {
  const project = projectById(projectId);
  if (!project) return;
  const copy = COPY[lang];
  if (trigger) lastModalTrigger = trigger;
  const modal = $('projectModal');
  modal.dataset.projectId = projectId;
  setText('modalStatus', t(project.statusText));
  setText('modalTitle', t(project.modalTitle || project.title));
  setText('modalDesc', t(project.desc));
  $('modalTags').innerHTML = (project.tags || []).map(tag => `<span class="tag">${esc(tag)}</span>`).join('');
  const details = project.details?.[lang] || [];
  $('modalDetails').innerHTML = details.map(([title, body]) => `<section class="detail-block"><h3>${esc(title)}</h3><div>${body}</div></section>`).join('');
  setText('modalEvidenceTitle', copy.modalEvidence);
  $('modalGallery').innerHTML = (project.gallery || []).map(([src, caption]) => `<figure><img src="${esc(localizedMedia(src))}" alt="${esc(t(caption))}" loading="lazy"><figcaption>${esc(t(caption))}</figcaption></figure>`).join('');
  $('modalGallery').closest('.modal-gallery-wrap').hidden = !(project.gallery || []).length;
  applyArabicModalLtr($('modalDetails'));
  applyArabicModalLtr($('modalGallery'));
  renderProjectLinks(project, copy);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (changeFocus) $('modalClose').focus();
}

function closeProject() {
  const modal = $('projectModal');
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  delete modal.dataset.projectId;
  if (lastModalTrigger?.isConnected) lastModalTrigger.focus();
  lastModalTrigger = null;
}

let docReturnFocus = null;
function openProjectDocument(src, trigger = null) {
  if (!src) return;
  const modal = $('docModal');
  docReturnFocus = trigger || document.activeElement;
  $('docFrame').src = src;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}
function closeProjectDocument() {
  const modal = $('docModal');
  if (!modal?.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  $('docFrame').src = 'about:blank';
  if (!$('projectModal').classList.contains('open') && !$('cvModal').classList.contains('open')) document.body.classList.remove('modal-open');
  if (docReturnFocus?.isConnected) docReturnFocus.focus();
  docReturnFocus = null;
}

function trapModalFocus(event) {
  if (event.key !== 'Tab' || !$('projectModal').classList.contains('open')) return;
  const focusable = [...$('projectModal').querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(el => el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function closeContactMenus(except = null) {
  document.querySelectorAll('.contact-menu-trigger').forEach(trigger => {
    if (trigger === except) return;
    const menu = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', 'false');
    if (menu) menu.hidden = true;
  });
}

function showToast(message) {
  let toast = $('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'site-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (_) {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
  showToast(COPY[lang].copied);
}

$('langBtn').addEventListener('click', () => { lang = lang === 'ar' ? 'en' : 'ar'; render(); closeMobileNav(); });
$('menuBtn').addEventListener('click', () => {
  const open = !$('mainNav').classList.contains('open');
  $('mainNav').classList.toggle('open', open);
  $('menuBtn').setAttribute('aria-expanded', String(open));
});
function closeMobileNav() { $('mainNav').classList.remove('open'); $('menuBtn').setAttribute('aria-expanded', 'false'); }
$('mainNav').addEventListener('click', event => { if (event.target.closest('a')) closeMobileNav(); });

document.addEventListener('click', event => {
  const trigger = event.target.closest('.contact-menu-trigger');
  if (trigger) {
    const menu = document.getElementById(trigger.getAttribute('aria-controls'));
    const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
    closeContactMenus(trigger);
    trigger.setAttribute('aria-expanded', String(willOpen));
    if (menu) menu.hidden = !willOpen;
    return;
  }

  const copyButton = event.target.closest('[data-copy-value]');
  if (copyButton) {
    copyToClipboard(copyButton.dataset.copyValue || '');
    closeContactMenus();
    return;
  }

  if (!event.target.closest('.contact-menu-wrap')) closeContactMenus();
});

document.addEventListener('click', event => {
  const button = event.target.closest('.open-project');
  if (button) openProject(button.dataset.projectId, button);
});

$('projectModal')?.addEventListener('click', async event => {
  const preview = event.target.closest('.project-doc-preview');
  if (preview) {
    event.preventDefault();
    openProjectDocument(preview.dataset.docSrc, preview);
    return;
  }
  const download = event.target.closest('.project-doc-download');
  if (download) {
    event.preventDefault();
    const ok = await downloadFileInPlace(download.dataset.downloadSrc, download.dataset.downloadName);
    if (!ok) showToast(lang === 'ar' ? 'تعذر بدء التحميل.' : 'Unable to start download.');
  }
});
window.addEventListener('resize', () => syncProjectQuickActions());
$('docModal')?.addEventListener('click', event => { if (event.target === $('docModal')) closeProjectDocument(); });

function currentSectionId(){const sections=[...document.querySelectorAll('main > section[id]')];const headerOffset=82;let current=sections[0]?.id||'home';for(const section of sections){if(section.getBoundingClientRect().top<=headerOffset+8)current=section.id;else break;}return current;}
function saveMainScroll(){try{sessionStorage.setItem('portfolio-main-scroll',String(window.scrollY));sessionStorage.setItem('portfolio-main-section',currentSectionId());sessionStorage.setItem('portfolio-main-lang',lang);}catch(_){}}
try{if(sessionStorage.getItem('portfolio-restore-scroll')==='1'&&'scrollRestoration' in history)history.scrollRestoration='manual';}catch(_){}
function restoreMainScroll(){
  try{
    if(sessionStorage.getItem('portfolio-restore-scroll')!=='1')return;
    const sectionId=sessionStorage.getItem('portfolio-main-section');
    const raw=sessionStorage.getItem('portfolio-main-scroll');
    const section=sectionId?document.getElementById(sectionId):null;
    const target=section?Math.max(0,section.offsetTop-70):Math.max(0,Number(raw)||0);
    let attempts=0,stable=0;const root=document.documentElement,previousScrollBehavior=root.style.scrollBehavior;root.style.scrollBehavior='auto';
    const apply=()=>{
      window.scrollTo(0,target);attempts+=1;
      stable=Math.abs(window.scrollY-target)<=2?stable+1:0;
      if(stable>=2||attempts>=10){root.style.scrollBehavior=previousScrollBehavior;sessionStorage.removeItem('portfolio-main-scroll');sessionStorage.removeItem('portfolio-main-section');sessionStorage.removeItem('portfolio-restore-scroll');return;}
      setTimeout(apply,attempts<4?60:120);
    };
    requestAnimationFrame(()=>requestAnimationFrame(apply));
  }catch(_){}
}
function syncCvDownload(version = cvDisplayedVersion) {
  cvDisplayedVersion = version === 'ar' ? 'ar' : 'en';
  const link = $('cvDownload');
  const file = CV_FILES[cvDisplayedVersion];
  if (!link) return;
  link.href = file;
  link.dataset.file = file;
  link.setAttribute('download', file.split('/').pop());
}

async function downloadFileInPlace(url, filename) {
  const name = filename || String(url || '').split('/').pop() || 'download.pdf';
  if (window.PortfolioDownloads?.download?.(url, name)) return true;
  if (location.protocol === 'file:') {
    const a = document.createElement('a');
    a.href = url; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
    return true;
  }
  try {
    const response = await fetch(url, { credentials: 'same-origin', cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objectUrl; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
  } catch (error) {
    console.error('Download failed:', error);
    return false;
  }
  return true;
}

let cvOpener=null,cvScrollY=0;function openCv(){const m=$('cvModal');cvOpener=document.activeElement;cvScrollY=window.scrollY;syncCvDownload('en');$('cvFrame').src='resources/pdf-viewer.html?doc=cv&lang=en';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}
function closeCv(){const m=$('cvModal');if(!m.classList.contains('open'))return;m.classList.remove('open');m.setAttribute('aria-hidden','true');$('cvFrame').src='about:blank';document.body.classList.remove('modal-open');window.scrollTo(0,cvScrollY);(cvOpener&&cvOpener.focus?cvOpener:$('cvCta')).focus();}
$('cvCta').addEventListener('click',openCv);
$('cvModal').addEventListener('click',e=>{if(e.target===$('cvModal'))closeCv();});
window.addEventListener('message',e=>{
  if(e.source===$('cvFrame').contentWindow){
    if(e.data?.type==='portfolio-cv-version')syncCvDownload(e.data.version);
    if(e.data?.type==='portfolio-viewer-close')closeCv();
    return;
  }
  if(e.source===$('docFrame')?.contentWindow && e.data?.type==='portfolio-viewer-close') closeProjectDocument();
});
['allCertsLink','libraryLink'].forEach(id=>$(id)?.addEventListener('click',saveMainScroll));
$('recommendations')?.addEventListener('click',e=>{if(e.target.closest('.recommendation-link'))saveMainScroll();});
$('educationTimeline')?.addEventListener('click',e=>{if(e.target.closest('.education-certificate-link'))saveMainScroll();});
window.addEventListener('pageshow',restoreMainScroll);

$('modalClose').addEventListener('click', closeProject);
$('projectModal').addEventListener('click', event => { if (event.target === $('projectModal')) closeProject(); });
let navSectionObserver = null;
function setupActiveNav(){
  navSectionObserver?.disconnect();
  const links=[...document.querySelectorAll('#mainNav a[href^="#"]')];
  const byId=new Map(links.map(link=>[link.getAttribute('href').slice(1),link]));
  const sections=[...byId.keys()].map(id=>document.getElementById(id)).filter(Boolean);
  const setActive=id=>links.forEach(link=>{const active=link===byId.get(id);link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  navSectionObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if(visible[0])setActive(visible[0].target.id);
  },{rootMargin:'-70px 0px -45% 0px',threshold:[0.1,0.25,0.5,0.75]});
  sections.forEach(section=>navSectionObserver.observe(section));
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeContactMenus(); if ($('docModal')?.classList.contains('open')) closeProjectDocument(); else if ($('cvModal').classList.contains('open')) closeCv(); else if ($('projectModal').classList.contains('open')) closeProject(); else closeMobileNav(); }
  trapModalFocus(event);
});


/* v4.36-f — subtle pointer tilt for the motion-card visual system.
   Event delegation keeps working after AR/EN re-renders dynamic cards. */
const motionFinePointer = window.matchMedia('(pointer: fine)');
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionSelector = '.motion-card, .project-card, .cert-item, .pro-cert-row, .additional-item, .resource-card, .contact-card, .career-card';
let activeMotionCard = null;

function resetMotionCard(card) {
  if (!card) return;
  card.style.removeProperty('--mx');
  card.style.removeProperty('--my');
  card.style.removeProperty('--rx');
  card.style.removeProperty('--ry');
}

document.addEventListener('pointermove', event => {
  if (!motionFinePointer.matches || motionReduced.matches) return;
  const card = event.target.closest(motionSelector);
  if (!card) {
    if (activeMotionCard) resetMotionCard(activeMotionCard);
    activeMotionCard = null;
    return;
  }
  if (activeMotionCard && activeMotionCard !== card) resetMotionCard(activeMotionCard);
  activeMotionCard = card;
  const rect = card.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
  card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
  card.style.setProperty('--rx', `${((0.5 - y) * 3.2).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${((x - 0.5) * 4.4).toFixed(2)}deg`);
});

document.addEventListener('pointerout', event => {
  const card = event.target.closest(motionSelector);
  if (!card || card.contains(event.relatedTarget)) return;
  resetMotionCard(card);
  if (activeMotionCard === card) activeMotionCard = null;
});

render();
