import LogoBox from "../../component/skils/LogoBox";

export default function Skils() {
  return (
    <section class="flex-grow text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <LogoBox></LogoBox>
        </div>
      </div>
    </section>
  );
}
