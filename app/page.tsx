import Image from "next/image";
// Components
import Footer from "@/components/Footer";
// Images 
import Image1 from "@/public/images/fawas-2.jpg";
import Image2 from "@/public/images/n3FxoNjdlwSzOm.gif";
import Image3 from "@/public/images/tTaJdXZuxjN3fl.gif";
import Image4 from "@/public/images/IWxPySm8vh8xwI.gif"

export default function Home() {


  const clearExercises = [
    {
      "bodyPart": "waist",
      "equipment": "وزن الجسم",
      "gifUrl": Image2,
      "id": "0001",
      "name": "تمارين الجلوس الثلاثية الربع",
      "target": "abs",
      "secondaryMuscles": [
        "عضلات الفخذين القابضة",
        "الظهر السفلي"
      ],
      "instructions": [
        "استلقِ على ظهرك مع ثني الركبتين ووضع القدمين على الأرض",
        "ضع يديك خلف رأسك مع توجيه المرفقين للخارج",
        "باستخدام عضلات بطنك، ارفع الجزء العلوي من جسمك ببطء عن الأرض مع التكور للأمام حتى يصدر جذعك بزاوية 45 درجة",
        "اثبت للحظة عند القمة، ثم اخفض الجزء العلوي من جسمك ببطء إلى وضع البداية",
        "كرر التمرين للعدد المطلوب من المرات"
      ]
    },
    {
      "bodyPart": "chest",
      "equipment": "آلة النفوذ",
      "gifUrl": Image3,
      "id": "0009",
      "name": "غطسة الصدر بمساعدة (الركوع)",
      "target": "pectorals",
      "secondaryMuscles": [
        "العضلة ثلاثية الرؤوس",
        "الأكتاف"
      ],
      "instructions": [
        "اضبط الآلة على الارتفاع المطلوب وثبّت ركبتيك على الوسادة",
        "أمسك المقابض مع توجيه راحتي اليدين للأسف وذراعيك ممدودتين بالكامل",
        "اخفض جسمك عن طريق ثني المرفقين حتى تصبح العضد العلوية موازية للأرض",
        "اثبت للحظة، ثم ادفع نفسك للأعلى إلى وضع البداية",
        "كرر التمرين للعدد المطلوب من المرات"
      ]
    },
    {
      "bodyPart": "shoulders",
      "equipment": "قضيب حديد",
      "gifUrl": Image4,
      "id": "0041",
      "name": "الرفعة الأمامية بقضيب الحديد",
      "target": "delts",
      "secondaryMuscles": [
        "biceps",
        "triceps"
      ],
      "instructions": [
        "قف مع مباعدة القدمين بعرض الكتفين وأمسك القضيب أمام فخذيك بقبضة علوية.",
        "ارفعه أماميًا حتى مستوى الكتفين مع إبقاء الذراعين مستقيمتين.",
        "توقف للحظة في الأعلى، ثم أنزله ببطء.",
        "كرر للعدد المطلوب."
      ]
    },
  ]

  return (
    <div>
      <div>
        {/* قسم البطل الفاخر */}
        <section className="luxury-hero">
          <div className="luxury-profile">
            <Image src={Image1} alt="[اسمك]" className="luxury-image" />
          </div>
          <div className="luxury-content">
            <h1 className="elegant-title">
              [Fawaz Al Aranji]
            </h1>
            <p className="luxury-bio">
              مدرب النخبة المعتمد دوليًا،<br />
              مختص في تحويل الأجسام إلى مستويات بطولية<br />
              مع نهج فريد يجمع بين العلم والفن في التدريب
            </p>
            <div className="badge-container">
              <div className="prestige-badge">
                <i className="fas fa-gem" /> IFBB PRO
              </div>
              <div className="prestige-badge">
                <i className="fas fa-trophy" /> 10+ جوائز
              </div>
              <div className="prestige-badge">
                <i className="fas fa-star" /> نخبة المدربين
              </div>
            </div>
            <div className="social-links-luxury">
              <a href="#" className="social-icon-luxury">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="social-icon-luxury">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#" className="social-icon-luxury">
                <i className="fab fa-facebook" />
              </a>
            </div>
            <button className="cta-luxury">
              اشترك VIP
            </button>
          </div>
        </section>
        {/* قسم موحد يجمع بين العرض والتسجيل */}
        <section className="unified-section">
          <h2 className="title">انضم إلى برنامج النخبة</h2>
          <div className="unified-benefits">
            <div className="unified-benefit">
              <i className="fas fa-dumbbell" />
              <div>
                <h3>خطط تدريب شخصية</h3>
                <p>تصميم حسب قياساتك الجسدية وأهدافك</p>
              </div>
            </div>
            <div className="unified-benefit">
              <i className="fas fa-certificate" />
              <div>
                <h3>نظام غذائي</h3>
                <p>نظام غذائي مرن يتناسب مع أهدافك</p>
              </div>
            </div>
            <div className="unified-benefit">
              <i className="fas fa-chart-line" />
              <div>
                <h3>تقييم أسبوعي</h3>
                <p>متابعة دقيقة لتقدمك مع تقارير مفصلة</p>
              </div>
            </div>
          </div>
          <form className="unified-form">
            <input type="text" placeholder="الاسم الكامل" required />
            <input type="email" placeholder="البريد الإلكتروني" required />
            <select required>
              <option>المستوى</option>
              <option>مبتدأ</option>
              <option>مستوى أول</option>
              <option>مستوى ثاني</option>
              <option>مستوى ثالث</option>
              <option>مستوى رابع</option>
            </select>
            <button type="submit">ابدأ رحلتك الآن</button>
          </form>
          <h2 className="title">رحلتك تبدأ من هنا</h2>
        </section>
        <section className="schedules">
          <h2 className="title">تمارين الكترونية واضحة</h2>
          <div className="flex flex-wrap gap-2">
            {
              clearExercises.map((item) => (
                <div className="exercise-card" key={item.id}>
                  <div className="card-header">
                    <h1 className="exercise-title">{item.name}</h1>
                    <div className="exercise-info">
                      <span>المستوى: {item.target}</span>
                      <span>ID: {item.id}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="gif-container">
                      <Image src={item.gifUrl} alt="gif" className="gif-iframe" />
                    </div>
                    <div className="muscles-section">
                      <h3 className="section-title">العضلات المستخدمة</h3>
                      <ul className="muscles-list">
                        {item.secondaryMuscles.map((muscle) => (
                          <li key={muscle}>{muscle}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="instructions-section">
                      <h3 className="section-title">الخطوات</h3>
                      <ol className="instructions-list">
                        {item.instructions.map((instruction) => (
                          <li key={instruction}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="equipment-chip">{item.equipment}</div>
                  </div>
                </div>

              ))
            }
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
