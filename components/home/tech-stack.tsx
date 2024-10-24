const TechnologyStack = () => {
  return (
    <div className="relative mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Technology logos */}
          <div className="w-16 h-16 bg-[#61DAFB] rounded-full flex items-center justify-center">
            {/* React logo placeholder */}
          </div>
          <div className="w-16 h-16 bg-[#339933] rounded-full flex items-center justify-center">
            {/* Node.js logo placeholder */}
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            {/* Next.js logo placeholder */}
          </div>
        </div>
        <div className="text-center mt-8 text-white">
          <p className="text-lg lg:text-xl">
            Fast, scalable Node.js solutions for modern
            <br className="hidden lg:block" />
            web and mobile applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
