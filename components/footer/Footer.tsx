import Image from 'next/image'
import Link from 'next/link';

function Footer() {
	return (
		<footer className="py-7 border-t bg-white">
			<div className="container px-7 md:px-10 lg:px-12 mx-auto">
				<div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
					<div className="w-full lg:w-1/3 px-2 lg:px-10 mb-12 lg:mb-0">
						<Link className="text-gray-600 text-2xl leading-none" href="/">
							<Image
								className=""
								width={240}
								height={120}
								src="/images/logo/danops-logo-tagline.png"
								alt="optimesoft-logo"
							/>
						</Link>
						<p className="mt-5 mb-3 max-w-xs text-gray-500 leading-loose">
							Let&apos;s connect <br />
						</p>
						<div>
							<a className="inline-block h-6 mr-4" href="https://twitter.com/realDanOps"
								target="_blank" rel="noopener noreferrer">
								<Image src="/images/social/twitter.png" alt="Twitter Logo" width={27} height={28} />
							</a>
							<a className="inline-block h-6 mr-4" href="#">
								<Image src="/images/social/instagram.png" alt="Instagram Logo" width={27} height={28} />
							</a>
							<a className="inline-block h-6 mr-8" href="#">
								<Image src="/images/social/facebook.png" alt="Facebook Logo" width={27} height={28} />
							</a>
						</div>
					</div>
					<div className="w-full lg:w-2/3 px-3 lg:px-8">
						<div className="flex flex-wrap justify-between">
						<div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
							<h3 className="mb-6 text-lg font-bold font-heading">Services</h3>
							<ul className="text-sm">
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">Development</a></li>
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">Cloud &  DevOps</a></li>
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">Engineering & Designs</a></li>
							<li><a className="text-gray-500 hover:text-gray-600" href="#">Marketing</a></li>
							</ul>
						</div>
						<div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
							<h3 className="mb-6 text-lg font-bold font-heading">Products</h3>
							<ul className="text-sm">
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">E-Commerce Application</a></li>
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">ERM Application</a></li>
							</ul>
						</div>
						<div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
							<h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
							<ul className="text-sm">
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">Terms</a></li>
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">About Us</a></li>
							<li><a className="text-gray-500 hover:text-gray-600" href="#">Privacy</a></li>
							</ul>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<h3 className="mb-6 text-lg font-bold font-heading">Resources</h3>
							<ul className="text-sm">
							<li className="mb-4"><a className="text-gray-500 hover:text-gray-600" href="#">Blog</a></li>
							<li><a className="text-gray-500 hover:text-gray-600" href="#">Stories</a></li>
							</ul>
						</div>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200 pt-6">
					<p className="lg:text-center text-sm text-gray-400">&copy; 2023 DanOps</p>
				</div>
			</div>
		</footer>
	);
  }
  
  export default Footer;