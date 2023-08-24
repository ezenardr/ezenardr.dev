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
    Elipse,
    Profile,
    Check,
    Skill1,
    Skill2,
    Skill3,
    Whatsapp,
    Phone,
    Mail,
    Twitter,
    GithubBlack,
} from '@/utils/Images';
import '.././page.css';
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
                        Hello 👋 Je suis Rodolphe, <br />
                        développeur <span className="role">Web </span>
                    </h1>
                    <TechStack />
                    <div className="cta-box">
                        <Link href="#contact" className="btn-primary">
                            CONTACT
                        </Link>
                        <Link href="/" className="btn-secondary">
                            <div className="cta-secondary">
                                <Image
                                    src={Download}
                                    alt="Icon of a resume"
                                    width={24}
                                    height={24}
                                    loading="eager"
                                />
                                <p>Télécharger mon CV</p>
                            </div>
                        </Link>
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
                Collaborons !
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
                tertiary="Renforcez votre succès en ligne grâce à des solutions web sur mesure"
                text="En tant que développeur web dévoué, j'offre une gamme de services pour aider les entreprises et les particuliers à établir une présence en ligne solide et à offrir des expériences numériques exceptionnelles."
            />
            <div className="services-details">
                <Card
                    image={Responsive}
                    title="Design adaptatif"
                    text="Dans le monde actuel axé sur la mobilité, posséder un site web adaptatif est incontournable. J'assure que votre site s'adapte en toute fluidité à différentes tailles d'écran, offrant ainsi une expérience utilisateur optimale à tous, que ce soit sur un ordinateur de bureau, une tablette ou un smartphone."
                />
                <Card
                    className="card-blue"
                    image={Maintenance}
                    title="Maintenance et Assistance"
                    text="Mon engagement envers votre projet ne se termine pas après le lancement. Je propose des services de maintenance continue et d'assistance pour maintenir le bon fonctionnement de votre site web. Des mises à jour régulières à la résolution des problèmes qui pourraient survenir, je suis là pour vous soutenir."
                />
                <Card
                    image={Web}
                    title="Développement Web"
                    text="J'excelle dans le développement front-end, transformant les concepts de design en interfaces interactives parfaitement alignées sur les pixels. Doté d'un sens aigu du détail et animé par une passion pour la création d'expériences conviviales, je m'assure que votre site web a non seulement un aspect attrayant, mais fonctionne également de manière impeccable sur tous les appareils."
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
                    <Image className="image-1" src={Elipse} alt="Elipse" />
                    <Image
                        className="image-2"
                        src={Profile}
                        alt="Profile picture of ezenardr"
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
                    <h2 className="about-title">À Propos de Moi</h2>
                    <div className="tag">
                        <Image
                            src={Check}
                            alt="icon of checkbox"
                            width={24}
                            height={24}
                        />
                        Disponible pour travailler
                    </div>
                    <p className="about-text">
                        Je crois que le développement web de qualité va au-delà
                        de la simple rédaction de code ; il s&apos;agit de
                        comprendre les utilisateurs finaux, de tirer parti des
                        dernières technologies et de créer des expériences
                        utilisateur fluides. <br />
                        Je me spécialise dans le développement front-end, y
                        compris HTML, CSS et JavaScript, et j&apos;élargis
                        constamment mes compétences pour rester à jour avec les
                        nouvelles technologies web émergentes.
                    </p>
                </div>
                <div className="project-box">
                    <p className="projects-title">Derniers Projets</p>

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
                secondary="
                Compétences Techniques"
                tertiary="
                Maîtrise de l'Art Numérique : Exploiter les Technologies de Pointe pour Créer des Expériences Web Immersives."
            />
            <div className="skills">
                <div className="skill">
                    <div className="skill-text-box">
                        <p className="skill-title">
                            Adaptabilité et Apprentissage
                        </p>
                        <p className="skill-text">
                            La nature dynamique du développement web
                            m&apos;inspire à continuer d&apos;apprendre et de
                            m&apos;adapter aux technologies émergentes. Je reste
                            informé des dernières tendances pour offrir des
                            solutions de pointe à mes clients.
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
                        <p className="skill-title">Résolution de Problèmes</p>
                        <p className="skill-text">
                            Je prospère en affrontant les défis de front et en
                            trouvant des solutions créatives à des problèmes
                            complexes. Le dépannage et la résolution de
                            problèmes font partie de ma nature, garantissant des
                            applications fluides et sans erreurs.
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-text-box">
                        <p className="skill-title">Consultation et Conseils</p>
                        <p className="skill-text">
                            Vous ne savez pas par où commencer avec votre projet
                            web ? Je suis là pour vous aider ! Je fournis des
                            conseils d&apos;expert et une consultation sur tous
                            les aspects du développement web. Que ce soit le
                            choix des technologies, les décisions de design ou
                            la stratégie globale, je vous guiderai à travers
                            chaque étape du processus.
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
                        Enthousiaste à Collaborer : Donner Vie à Votre Vision
                        Ensemble !
                    </h2>
                    <p className="contact-text">
                        Si vous êtes en quête d&apos;un développeur web
                        compétent pour donner vie à votre vision, je suis à
                        votre disposition pour réaliser cet objectif.
                        N&apos;hésitez pas à explorer en profondeur les détails
                        de mes projets antérieurs, et je vous invite
                        cordialement à prendre contact avec moi.
                    </p>
                    <div className="contact-cta">
                        <Link
                            className="contact-cta-btn"
                            href="mailto:contact@ezenardr.dev"
                        >
                            Collaborons
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
                &copy; Copyright 2023 | Tout droits réservés |{' '}
                <Link href="/">English</Link>
            </p>
        </footer>
    );
}
