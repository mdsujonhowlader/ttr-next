export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 md:space-y-4">
      <div className="bg-badge px-4 py-1 shadow-2xl rounded-lg border border-primary">
        <h4 className="text-xs md:text-md tracking-tight">
          Welcome to Tech Resoolver <span aria-hidden="true">&rarr;</span>
        </h4>
      </div>
      <h1 className="w-4/5 md:w-2/3 text-secondary font-bold md:font-bold text-4xl tracking-wide  md:text-5xl leading-normal uppercase text-center">
        Today Started Journey with us
      </h1>
      <p className="text-md md:text-lg w-6/7 md:w-2/3 tracking-tight text-center text-secondary whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi
        amet incidunt dolores soluta atque qui illum doloribus, quam, possimus.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 ">
        <button className="bg-button  font-medium text-muted px-5 py-2 md:px-4 md:py-2 rounded-lg hover:bg-button/90 cursor-pointer transition ">
          Get Free Consultancy
        </button>
        <button className="text-foreground font-medium hover:text-muted border-1 px-5 py-2 md:px-4 md:py-2 rounded-lg border-button cursor-pointer hover:bg-button">
          See running projects
        </button>
      </div>
      {/* <div className="mt-5">
        <h4 className="text-center">Our Expertise:</h4>
        <div className="grid grid-cols-3 md:grid-cols-4 justify-items-center items-center gap-x-3 gap-y-2 sm:gap-x-3 mt-4">
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1 ">
            <h5>Ecommerce</h5>
          </div>
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1 ">
            <h5>Education</h5>
          </div>
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1 ">
            <h5>Protfolio</h5>
          </div>
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1 ">
            <h5>POS System</h5>
          </div>
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1 ">
            <h5>ERP Solution</h5>
          </div>
          <div className="bg-button text-muted text-center dark:bg-muted dark:text-secondary rounded-md text-sm px-2 py-1">
            <h5>Strategy</h5>
          </div>
        </div>
      </div> */}
    </section>
  );
}
