import Image from "next/image";
// Components
import Footer from "@/components/Footer";
// Images 
import Image1 from "@/public/images/fawas-2.jpg";
import Image2 from "@/public/images/1EwZOnjVpOD7ih.gif";

export default function Home() {
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
          <h2 className="title">جداول تمارين</h2>
          <div className="schedules-content">
            <div className="schedules-card">
              <div>
                <Image src={Image2} alt="schedules-image" />
              </div>
              <h3>دوران</h3>
            </div>
            <div className="schedules-card">
              <div>
                <Image src={Image2} alt="schedules-image" />
              </div>
              <h3>دوران</h3>
            </div>
            <div className="schedules-card">
              <Image src={Image2} alt="schedules-image" />
            </div>
            <div className="schedules-card">
              <Image src={Image2} alt="schedules-image" />
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </div>
  );
}
