import LogoBox from "../../component/skils/LogoBox";

export default function Skils() {
  const logoNameList = ["js", "html", "less"];
  return (
    <section className="flex-grow text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <LogoBox title="기본" logo={logoNameList}></LogoBox>
        </div>
      </div>
    </section>
  );
}
