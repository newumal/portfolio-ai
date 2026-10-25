import { FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { resume } from '../data/content';

const Resume = () => {
  return (
    <Section
      id="resume"
      kicker={resume.kicker}
      heading={resume.heading}
      intro={resume.blurb}
      className="bg-panel/40"
    >
      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={resume.file}
            download={resume.fileName}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/30 transition-all hover:bg-accent-hover"
          >
            <FaDownload className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            {resume.downloadLabel}
          </a>
          <a
            href={resume.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/40 px-6 py-3 text-sm font-semibold text-chalk transition-colors hover:border-accent/60 hover:text-accent"
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" />
            {resume.openLabel}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mt-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-line px-5 py-3">
            <FaFilePdf className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-fog">{resume.fileName}</span>
          </div>

          {/* Desktop / tablet: inline preview. Mobile browsers often block PDF iframes. */}
          <div className="relative hidden bg-ink sm:block">
            <iframe
              title={resume.previewTitle}
              src={`${resume.file}#view=FitH`}
              className="h-[70vh] w-full min-h-[520px] border-0"
            />
          </div>

          <div className="flex flex-col items-start gap-4 p-6 sm:hidden">
            <p className="text-sm leading-relaxed text-fog">{resume.mobileHint}</p>
            <a
              href={resume.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              {resume.openLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Resume;
