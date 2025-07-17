import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "typescript",
  "python",
  "java",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "html5",
  "css3",
  "mongodb",
  "mysql",
  "firebase",
  "postgresql",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma"
];


function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
