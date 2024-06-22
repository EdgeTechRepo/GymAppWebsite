import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { DownloadButton } from "@layouts/components/DownloadButton";
import social from "@config/social.json";

const About = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  const youtubeVideo = <iframe style={{ aspectRatio: 1.72 }} className="w-full sm:mx-auto sm:w-[60%]" src={info.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  const gotoCourseButton = <div>
    <button type="submit" className="btn btn-primary !mt-8">
      <div className="w-auto space-y-1 ">
        <div>{info.course.text}</div>
        <div className="text-xs font-normal text-slate-100">{info.course.subtext}</div>
      </div>
    </button>
  </div>
  const downloadAppButton = <DownloadButton />

  const connectMe = <div className="section">
    <h3>Connect Me</h3>
    {info.connectMe.map(line => {
      return markdownify(line, "p", "mt-4")
    })}

  </div>

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h2", "text-center font-normal")}
        <div className="row pb-0">
          <div className="content col-12 text-center space-y-2">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            {youtubeVideo}
            {gotoCourseButton}
            {connectMe}
            {/* {downloadAppButton} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
