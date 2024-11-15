const Footer = () => {
  return (
    <footer className="z-0 w-full md:w-[80%] mx-auto">
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © {new Date().getFullYear()} Kunal Chandra Das, Inc. All rights
            reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
