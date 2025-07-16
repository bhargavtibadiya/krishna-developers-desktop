import { Typography, Row, Col, Avatar, Button, Carousel, Form, Input, message } from 'antd';
import { StarFilled, HomeFilled, ThunderboltFilled, EnvironmentFilled, TeamOutlined, TrophyFilled } from '@ant-design/icons';
import styles from './home.module.scss';
import { useRef } from 'react';

const { Title, Paragraph, Text } = Typography;

const features = [
  { icon: <ThunderboltFilled className={styles.featureIcon} />, title: 'Innovative Architecture', desc: 'Cutting-edge designs for modern living.' },
  { icon: <HomeFilled className={styles.featureIcon} />, title: 'Eco-Friendly Materials', desc: 'Sustainable, green building practices.' },
  { icon: <TeamOutlined className={styles.featureIcon} />, title: 'Smart Home Integration', desc: 'Future-ready, connected homes.' },
  { icon: <TrophyFilled className={styles.featureIcon} />, title: 'Award-Winning Designs', desc: 'Recognized for excellence in construction.' },
];

const gallery = [
  { img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', name: 'Skyline Towers', location: 'Mumbai' },
  { img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', name: 'Eco Residences', location: 'Pune' },
  { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', name: 'Green Valley', location: 'Ahmedabad' },
  { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', name: 'Urban Heights', location: 'Surat' },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Completed' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '15', label: 'Awards Won' },
];

const testimonials = [
  { name: 'Amit Shah', img: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Krishna Developers exceeded our expectations. The quality and service were top-notch!', rating: 5, project: 'Skyline Towers' },
  { name: 'Priya Mehta', img: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Our dream home became a reality. Highly recommended for modern living!', rating: 5, project: 'Eco Residences' },
  { name: 'Rahul Patel', img: 'https://randomuser.me/api/portraits/men/65.jpg', text: 'Professional, innovative, and reliable. The best builder in the region.', rating: 5, project: 'Green Valley' },
];

const founders = [
  { name: 'Rajesh Kumar', img: 'https://randomuser.me/api/portraits/men/11.jpg', role: 'CEO', quote: 'Building dreams, one brick at a time.' },
  { name: 'Sunita Sharma', img: 'https://randomuser.me/api/portraits/women/12.jpg', role: 'COO', quote: 'Innovation and quality are our foundation.' },
  { name: 'Vikram Desai', img: 'https://randomuser.me/api/portraits/men/13.jpg', role: 'CTO', quote: 'Smart homes for a smarter future.' },
  { name: 'Anjali Patel', img: 'https://randomuser.me/api/portraits/women/14.jpg', role: 'CFO', quote: 'Sustainability meets affordability.' },
];

const Home = () => {
  const [form] = Form.useForm();
  const handleContact = () => {
    message.success('Thank you for contacting us! We will get back to you soon.');
    form.resetFields();
  };
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img className={styles.heroBg} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" alt="Hero" />
        <div className={styles.heroContent}>
          <Title className={styles.heroTitle}>Building the Future, Today.</Title>
          <Paragraph className={styles.heroSubtitle}>Modern, sustainable, and visionary developments by Krishna Developers.</Paragraph>
          <Button type="primary" size="large" className={styles.heroBtn} href="#contact">Get a Free Consultation</Button>
          <Button size="large" className={styles.heroBtn} href="#gallery" style={{ background: '#fff', color: '#0a2342', border: 'none' }}>View Our Projects</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <Title level={2} style={{ textAlign: 'center', fontWeight: 700, marginBottom: 48, color: '#0a2342' }}>Why Choose Us</Title>
        <Row gutter={[32, 32]} justify="center">
          {features.map((f, idx) => (
            <Col xs={24} sm={12} md={6} key={idx}>
              <div className={styles.featureCard}>
                {f.icon}
                <Title level={4} style={{ color: '#ffd700', marginBottom: 8 }}>{f.title}</Title>
                <Paragraph style={{ color: '#e0e6ed' }}>{f.desc}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection} id="gallery">
        <Title level={2} style={{ textAlign: 'center', fontWeight: 700, marginBottom: 48, color: '#0a2342' }}>Our Projects</Title>
        <div className={styles.galleryGrid}>
          {gallery.map((g, idx) => (
            <div className={styles.galleryItem} key={idx}>
              <img src={g.img} alt={g.name} style={{ width: '100%', height: 240, objectFit: 'cover' }} />
              <div className={styles.galleryOverlay}>
                <Title level={4} style={{ color: '#ffd700', margin: 0 }}>{g.name}</Title>
                <Text style={{ color: '#fff' }}><EnvironmentFilled /> {g.location}</Text>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((s, idx) => (
            <div className={styles.statCard} key={idx}>
              {s.value}
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <Title level={2} style={{ color: '#0a2342', fontWeight: 700 }}>About Krishna Developers</Title>
        <Paragraph className={styles.aboutText}>
          Krishna Developers is a leading real estate builder with a passion for innovation, sustainability, and quality. For over 25 years, we have delivered landmark projects that shape skylines and communities. Our mission is to build not just homes, but a better future for all.
        </Paragraph>
        <div className={styles.signature}>Rajesh Kumar</div>
        <Text style={{ color: '#0a2342', fontWeight: 600 }}>Founder & CEO</Text>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <Title level={2} style={{ textAlign: 'center', fontWeight: 700, marginBottom: 48, color: '#0a2342' }}>What Our Clients Say</Title>
        <Carousel autoplay dots ref={carouselRef} style={{ maxWidth: 900, margin: '0 auto' }}>
          {testimonials.map((t, idx) => (
            <div key={idx}>
              <div className={styles.testimonialCard}>
                <Avatar src={t.img} size={80} className={styles.testimonialAvatar} />
                <Paragraph style={{ color: '#ffd700', fontWeight: 600, fontSize: 18 }}>{t.name}</Paragraph>
                <Paragraph style={{ color: '#e0e6ed', fontStyle: 'italic' }}>
                  "{t.text}"
                </Paragraph>
                <div>
                  {[...Array(t.rating)].map((_, i) => <StarFilled key={i} style={{ color: '#ffd700' }} />)}
                </div>
                <Text style={{ color: '#fff' }}>{t.project}</Text>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <Title level={2} style={{ textAlign: 'center', fontWeight: 700, marginBottom: 48, color: '#0a2342' }}>Meet Our Founders</Title>
        <Row gutter={[32, 32]} justify="center">
          {founders.map((f, idx) => (
            <Col xs={24} sm={12} md={6} key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className={styles.founderCard}>
                <Avatar src={f.img} size={96} className={styles.founderAvatar} />
                <Paragraph style={{ fontWeight: 700, fontSize: 18, color: '#0a2342', marginBottom: 0 }}>{f.name}</Paragraph>
                <Text style={{ color: '#e6b800', fontWeight: 500 }}>{f.role}</Text>
                <Paragraph style={{ color: '#0a2342', fontStyle: 'italic', marginTop: 8 }}>
                  "{f.quote}"
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <Title level={2} style={{ color: '#ffd700', fontWeight: 700 }}>Contact Us</Title>
        <Paragraph style={{ color: '#fff', marginBottom: 32 }}>Ready to start your dream project? Get in touch with us today!</Paragraph>
        <Form form={form} className={styles.contactForm} layout="vertical" onFinish={handleContact}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}> <Input size="large" /> </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}> <Input size="large" /> </Form.Item>
          <Form.Item name="phone" label="Phone"> <Input size="large" /> </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message' }]}> <Input.TextArea rows={4} /> </Form.Item>
          <Form.Item> <Button htmlType="submit" type="primary" className={styles.contactBtn} size="large">Send Message</Button> </Form.Item>
        </Form>
      </section>

      {/* Footer Section */}
      <footer className={styles.footerSection}>
        &copy; {new Date().getFullYear()} Krishna Developers. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;