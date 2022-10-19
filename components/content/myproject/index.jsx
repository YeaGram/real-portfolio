import ProjectItems from "./items";

export default function MyProject() {
  return (
    <section id="myproject" className="container px-5 my-2 text-white">
      <ProjectItems
        imgsrc="/project/webp/project-one.webp"
        prelink="https://dijarjr-portfolio.vercel.app/"
      />
      <ProjectItems
        imgsrc="/project/webp/ui-design-two.webp"
        prelink="https://real-ineffable-p98b.vercel.app/"
      />
    </section>
  );
}
