import Markdown from "react-markdown";
import { Navbar } from "~/components/navbar/NavBar";
import SamplePaths from "~/components/samplePath/samplePath";

const aboutPageMarkdown = `
## What is the Management Sciences (MSCI) Option?

The MSCI Option gives University of Waterloo undergraduate engineering students, except for Management Engineering students, the opportunity to incorporate the Management Sciences element in their engineering degree program.

Management Sciences is a broad interdisciplinary study of problem solving and decision making in organizations. It conducts research in three core areas of specialization: applied operations research, information systems, and management of technology. It uses a combination of analytical models, data science, and behavioral sciences to address society’s most complex problems.

## Why Should I Take the MSCI Option?

Options provide engineering students with opportunities to expand their degree by taking a combination of courses that provide a secondary emphasis in another subject or career-oriented area. At graduation, you will receive a designation on your transcript upon successful completion of this option.

Management Sciences concepts are broadly applicable in a variety of industries, including software, finance, supply chain and logistics, manufacturing and health care. Popular employment opportunities include roles such as business analyst, data scientist, product manager, consultant, software engineer, and more.

> “The MSCI option helped me a lot with all my co-op terms, because it has given me the knowledge base to go down the project management route… it might have been a factor that played a role in helping me land some of my co-ops.”
> > Chemical Engineering Class of 2023, Graduated with the MSCI Option

> “There is a business side to the MSCI option, as well as a data analysis side. I worked in data science and data analytics in my second co-op, so the MSCI option seemed fitting for me to gain more knowledge in that field… Being in Nanotechnology Engineering, our courses are very science heavy. Being able to take some MSCI courses allows me to learn something different.”
> > Nanotechnology Engineering student, Class of 2023, Graduated with MSCI option
`;

export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="m-auto max-w-2xl p-4">
        <h1 className="text-3xl font-semibold">About the MSCI Option</h1>

        <Markdown
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              />
            ),
            h2: ({ node, ...props }) => (
              <h2 {...props} className="mt-4 text-2xl font-medium" />
            ),
            h3: ({ node, ...props }) => (
              <h3 {...props} className="mt-4 text-xl font-medium" />
            ),
            p: ({ node, ...props }) => <p {...props} className="mt-2" />,
            blockquote: ({ node, ...props }) => (
              <blockquote
                {...props}
                className="my-4 ml-2 border-l-4 border-blue-500 pl-2 italic"
              />
            ),
          }}
        >
          {aboutPageMarkdown}
        </Markdown>

        <div className="mt-4">
          If you have more questions about the MSCI option, check out the{" "}
          <a href="/faq" target="_blank" className="text-blue-500">
            FAQs
          </a>
          .
        </div>
        <hr className="my-4" />
        <SamplePaths />
        <div className="mt-8" />
      </div>

      {/* CTA */}
    </div>
  );
};
