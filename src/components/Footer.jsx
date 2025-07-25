function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-4 text-center mt-12">
      <div>
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        <span className="ml-4">
          <a href="https://github.com/PruddieWoody" className="hover:underline">GitHub</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
