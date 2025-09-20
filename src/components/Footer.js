function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Ankit Maurya. All rights reserved.
                </p>


                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://github.com/mauryaankit685" target="_blank" rel="noopener noreferrer"
                        className="hover:text-white transition">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ankit-maurya-2a0a3b186/" target="_blank" rel="noopener noreferrer"
                        className="hover:text-white transition">
                        LinkedIn
                    </a>
                    <a href="mailto:mauryaankit685@gmail.com" className="hover:text-white transition">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
