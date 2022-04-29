import CustomNav from "../components/CustomNav";
function About() {
  return (
    <>
      <CustomNav />
      <div className="h-screen">
        <div className="font-semibold mx-5 my-14 md:flex md:justify-center md:items-center block text-justify">
          ServiceHub is a website – based service marketplace that connects
          customer to service professional. Our strategy is to connect a greater
          number of customers to use our platform of Service Hub is to make
          their life easier and more comfortable by providing on demand services
          through our website. ServiceHub has multiple categories to choose
          from for all of your daily needs.
        </div>
        <img src="../images/services.jpg" alt="" />
      </div>
    </>
  );
}

export default About;
