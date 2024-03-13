import React, { SetStateAction, useEffect, useState } from "react";
import mermaid, { RenderResult } from "mermaid";

const MermaidDiagram = () => {
  const [diagramHtml, setDiagramHtml] = useState<string | null>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    });

    const diagramCode = `
            graph LR
                    A-->B;
                    B-->C;
                    C-->D;
                    D-->A;
    `;

    mermaid
      .render("mermaid-diagram", diagramCode)
      .then((html: RenderResult) =>
        setDiagramHtml(html as unknown as SetStateAction<string | null>),
      )
      .catch((error: unknown) =>
        console.error("Error rendering mermaid diagram:", error),
      );
  }, []);

  return (
    <div className="mermaid">
      {diagramHtml && <div dangerouslySetInnerHTML={{ __html: diagramHtml }} />}
    </div>
  );
};

export default MermaidDiagram;
