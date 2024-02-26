import { Navbar } from "~/components/navbar/NavBar";

export const HelpPage = () => {
  return (
    <>
      <Navbar />
      <iframe
        src="https://docs.google.com/document/d/1Xt597D3OcmTYx51GUvW9QGghasvJFMxZwjeWQ74d1so/edit?usp=sharing"
        className="mx-auto my-8 min-h-[56rem] w-4/6"
      />
    </>
  );
};
