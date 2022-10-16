import LogoBox from "../../component/skils/LogoBox";

export default function Skils() {
  const logoNameListFirst = ["js", "html", "less", "backbone", "react", "grunt", "gradle", "webpack", "npm", "yarn"];
  const logoNameListSencond = ["linux", "docker", "kubernetes", "apache", "nginx", "jenkins"];
  return (
    <section className="flex-grow text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <LogoBox title="Web" logo={logoNameListFirst}></LogoBox>
          <LogoBox title="Devops" logo={logoNameListSencond}></LogoBox>
        </div>
      </div>
    </section>
  );
}
