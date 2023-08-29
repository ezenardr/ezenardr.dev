import Image from 'next/image';
import Link from 'next/link';
import {
    Logo,
    Hero,
    Reactjs,
    Next,
    Github,
    Css,
    Tailwind,
    Download,
    Maintenance,
    Responsive,
    Web,
    Check,
    Skill1,
    Skill2,
    Skill3,
    Whatsapp,
    Phone,
    Mail,
    Twitter,
    GithubBlack,
    Profile2,
} from '@/utils/Images';
import './page.css';
import Card from '@/components/Card';
import Headings from '@/components/Headings';
export default function Home() {
    return (
        <>
            <Header />
            <Services />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

function Header() {
    return (
        <header className="container">
            <Navigation />
            <div className="hero">
                <div className="hero-text-box">
                    <h1>
                        Hello 👋 I&apos;m Rodolphe, a<br />
                        <span className="role">Web </span>
                        developer
                    </h1>
                    <TechStack />
                    <div className="cta-box">
                        <Link href="#contact" className="btn-primary">
                            CONTACT
                        </Link>
                        <a
                            href="/public/cv/CV(en).pdf"
                            className="btn-secondary"
                            download
                        >
                            <div className="cta-secondary">
                                <Image
                                    src={Download}
                                    alt="Icon of a resume"
                                    width={24}
                                    height={24}
                                    loading="eager"
                                />
                                <p>Download my CV</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="hero-image-box">
                    <Image
                        src={Hero}
                        alt="Man working on PC"
                        loading="eager"
                        priority
                    />
                </div>
            </div>
        </header>
    );
}
function Navigation() {
    return (
        <nav>
            <Image
                className="logo"
                src={Logo}
                alt="Logo of ezenardr"
                loading="eager"
                priority
            />
            <Link className="btn-primary btn-nav" href="#contact">
                Work with me
            </Link>
        </nav>
    );
}
function TechStack() {
    return (
        <div className="stack-icon">
            <Image
                title="React"
                src={Reactjs}
                alt="Logo of Reactjs"
                width={32}
                height={32}
            />
            <Image
                title="Nextjs"
                src={Next}
                alt="Logo of Nextjs"
                width={32}
                height={32}
            />
            <Image
                title="Github"
                src={Github}
                alt="Logo of github"
                width={32}
                height={32}
            />
            <Image
                title="CSS"
                src={Css}
                alt="Logo of Css"
                width={32}
                height={32}
            />
            <Image
                title="Tailwind CSS"
                src={Tailwind}
                alt="Logo of Tailwind"
                width={32}
                height={32}
            />
        </div>
    );
}
function Services() {
    return (
        <section className="container">
            <Headings
                secondary="services"
                tertiary="Empowering Your Online Success with Tailored Web Solutions"
                text=" As a dedicated web developer, I offer a range of services to
                    help businesses and individuals establish a strong online
                    presence and deliver exceptional digital experiences."
            />
            <div className="services-details">
                <Card
                    image={Responsive}
                    title="Responsive Design"
                    text="In today's mobile-driven world, having a responsive
                        website is non-negotiable. I ensure that your site
                        adapts seamlessly to various screen sizes, providing an
                        optimal user experience for everyone, whether
                        they're on a desktop, tablet, or smartphone."
                />
                <Card
                    className="card-blue"
                    image={Maintenance}
                    title="Maintenance and Support"
                    text="My commitment to your project doesn't end after the
                    launch. I offer ongoing maintenance and support services
                    to keep your website running smoothly. From regular
                    updates to addressing any issues that may arise,
                    I've got your back."
                />
                <Card
                    image={Web}
                    title="Web Development"
                    text="I excel in front-end development, turning design
                    concepts into pixel-perfect, interactive interfaces.
                    With a keen eye for detail and a passion for creating
                    user-friendly experiences, I ensure that your website
                    not only looks great but also functions flawlessly
                    across all devices."
                />
            </div>
        </section>
    );
}
function About() {
    return (
        <section className="container section-about">
            <div className="profile-card">
                <div className="profile-card-img">
                    <Image
                        className="image-1"
                        src={Profile2}
                        alt="profile picture"
                    />
                </div>
                <p className="profile-card-name">Rodolphe Ezenard</p>
                <Link
                    href="mailto:contact@ezenardr.dev"
                    className="profile-card-mail"
                >
                    contact@ezenardr.dev
                </Link>
                <Link className="github-btn" href="https://github.com/ezenardr">
                    <Image
                        src={GithubBlack}
                        alt="Logo of Github"
                        width={24}
                        height={24}
                    ></Image>
                    Github
                </Link>
            </div>
            <div className="about-flex-2">
                <div className="about-box">
                    <h2 className="about-title">About Me</h2>
                    <div className="tag">
                        <Image
                            src={Check}
                            alt="icon of checkbox"
                            width={24}
                            height={24}
                        />
                        Available for work
                    </div>
                    <p className="about-text">
                        I believe that great web development is more than just
                        writing code; it&apos;s about understanding the
                        end-users, leveraging the latest technologies, and
                        crafting seamless user experiences. <br />I specialize
                        in front-end development, including HTML, CSS, and
                        JavaScript, and I am constantly expanding my skill set
                        to stay up-to-date with emerging web technologies.
                    </p>
                </div>
                <div className="project-box">
                    <p className="projects-title">Latest Projects</p>

                    <div className="project">
                        <Link
                            className="project-title"
                            href="https://iptracker.ezenardr.dev"
                        >
                            IP Tracker
                        </Link>
                        <span className="project-tools">
                            ReactJs, ViteJs, LeafletJs, Location API ..
                        </span>
                    </div>
                    <div className="project">
                        <Link
                            className="project-title"
                            href="https://restcountries.ezenardr.dev"
                        >
                            Where In The World
                        </Link>
                        <span className="project-tools">
                            NextJs, TailwindCSS, REST Countries API ...
                        </span>
                    </div>
                    <div className="project">
                        <Link
                            className="project-title"
                            href="https://blog.quimonteabord.com"
                        >
                            blog.quimonteabord.com
                        </Link>
                        <span className="project-tools">
                            NextJs, Prima, Supabase, Next-auth ...
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Skills() {
    return (
        <section className="container">
            <Headings
                secondary="technical proficiencies"
                tertiary="Mastering the Digital Craft: Harnessing Cutting-Edge Technologies to Craft Immersive Web Experiences."
            />
            <div className="skills">
                <div className="skill">
                    <div className="skill-text-box">
                        <p className="skill-title">Adaptability And Learning</p>
                        <p className="skill-text">
                            The dynamic nature of web development inspires me to
                            keep learning and adapting to emerging technologies.
                            I stay updated with the latest trends to provide
                            cutting-edge solutions to my clients.
                        </p>
                    </div>
                    <div className="skill-img-box">
                        <Image src={Skill1} alt="Man learning on pc" />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-img-box">
                        <Image src={Skill2} alt="People stuck in a problem" />
                    </div>
                    <div className="skill-text-box">
                        <p className="skill-title">Problem-Solving</p>
                        <p className="skill-text">
                            I thrive on tackling challenges head-on and finding
                            creative solutions to complex problems.
                            Troubleshooting and debugging are second nature to
                            me, ensuring smooth and error-free applications.
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-text-box">
                        <p className="skill-title">Consultation And Advice</p>
                        <p className="skill-text">
                            Not sure where to start with your web project?
                            I&apos;m here to help! I provide expert advice and
                            consultation on all things web development. Whether
                            it&apos;s technology choices, design decisions, or
                            overall strategy, I&apos;ll guide you through every
                            step of the process.
                        </p>
                    </div>
                    <div className="skill-img-box">
                        <Image src={Skill3} alt="People brainstorming" />
                    </div>
                </div>
            </div>
        </section>
    );
}
function Contact() {
    return (
        <section id="contact">
            <div className="section-contact">
                <div className="container">
                    <h2 className="contact-title">
                        Eager To Collaborate: Bringing Your Vision To Life
                        Together !
                    </h2>
                    <p className="contact-text">
                        If you&apos;re seeking a proficient web developer to
                        turn your vision into reality, I&apos;m here to make it
                        happen. Feel free to Dive into the details of my past
                        projects, and let&apos;s connect !
                    </p>
                    <div className="contact-cta">
                        <Link
                            className="contact-cta-btn"
                            href="mailto:contact@ezenardr.dev"
                        >
                            Work with Me
                        </Link>
                        <div className="icons">
                            <Link href="https://wa.me/50940884271">
                                <Image
                                    className="contact-icon"
                                    title="Whatsapp"
                                    src={Whatsapp}
                                    alt="Icon of whatsapp"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link href="phone:50949218029">
                                <Image
                                    className="contact-icon"
                                    title="Phone"
                                    src={Phone}
                                    alt="Icon of Phone"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link href="mailto:contact@ezenardr.dev">
                                <Image
                                    className="contact-icon"
                                    title="Mail"
                                    src={Mail}
                                    alt="Icon of Mail"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link href="https://twitter.com/ezenardr">
                                <Image
                                    className="contact-icon"
                                    title="Twitter"
                                    src={Twitter}
                                    alt="Icon of Twitter"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Footer() {
    return (
        <footer className="container footer">
            <div className="hr"></div>
            <p className="footer-text">
                &copy; Copyright 2023 | All rights reserved |{' '}
                <Link href="/fr-FR">Français</Link>
            </p>
        </footer>
    );
}
