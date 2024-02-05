"use client";
import Welcome from "@/components/Welcome";
import Logo from "@/img/Logo.svg";
import "./page.css";
import Image from "next/image";
import { ChevronRight, Github, Globe, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ButtonCta } from "@/components/Button";
import { Drawer } from "vaul";
import { projects } from "@/lib/projects";
import ParticlesComponent from "@/components/ParticlesComponent";

const date = new Date();
const year = date.getFullYear();

export default function Home() {
  return (
    <div className="main-container">
      <main>
        <nav>
          <Image src={Logo} alt="Logo" width={250} priority />
          <div className="nav-links">
            <Link href="mailto:contact@ezenardr.dev">
              <Mail className="icon" size={28} />
            </Link>
            <Link href="https://github.com/ezenardr">
              <Github className="icon" size={28} />
            </Link>
            <Link href="https://twitter.com/ezenardr">
              <Twitter className="icon" size={28} />
            </Link>
          </div>
        </nav>
        <header>
          <div className="hero-text-box">
            <Welcome />
            <p>
              My Name is Rodolphe Ezenard. I&apos;m a Web Developer. I believe
              that great web development is understanding the end-users,
              leveraging the latest technologies, and crafting seamless user
              experiences.
              <br /> <br />
              Not sure where to start with your web project? I provide expert
              advice and consultation. I&apos;ll guide you through every step of
              the process.
            </p>
            <ButtonCta action="mailto:contact@ezenardr.dev">
              Work with me
            </ButtonCta>
          </div>
          <div className="hero-right-box">
            <h2 className="projects">Projects</h2>
            {projects.map(({ title, image, description, link, github }) => (
              <div key={title}>
                <Drawer.Root>
                  <Drawer.Trigger asChild>
                    <div className="project-link-box">
                      <ChevronRight className="link-icon" size={24} />
                      <p className="project-link">{title}</p>
                    </div>
                  </Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Overlay className="overlay" />
                    <Drawer.Content className="content">
                      <div className="encoche" />
                      <div className="content-box">
                        <div className="image-box">
                          <Image
                            src={image}
                            width={500}
                            height={500}
                            alt="Project image"
                            loading="eager"
                            className="image"
                          />
                        </div>
                        <div className="content-text">
                          <h2 className="title">{title}</h2>
                          <p className="description">{description}</p>
                          <div className="link-box">
                            <Link href={link} className="link">
                              <Globe className="icon" size={32} />
                            </Link>
                            {github && (
                              <Link className="github" href={github}>
                                <Github className="icon" size={32} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </Drawer.Content>
                  </Drawer.Portal>
                </Drawer.Root>
              </div>
            ))}
          </div>
        </header>
        <p className="copyright">&copy; {year} ezenardr.dev</p>
        {/* React Particles */}
        <ParticlesComponent />
      </main>
    </div>
  );
}
