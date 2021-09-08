import PerfectScrollbar from "perfect-scrollbar";

const useSidebar = () => {
	let ps;
	// ........perfect scrollbar
	const perfectScrollbar = (resizeFunction, mainPanel) => {
		if (navigator.platform.indexOf("Win") > -1) {
			ps = new PerfectScrollbar(mainPanel.current, {
				suppressScrollX: true,
				suppressScrollY: false,
			});
			document.body.style.overflow = "hidden";
		}
		window.addEventListener("resize", resizeFunction);
		// Specify how to clean up after this effect:
		return function cleanup() {
			if (navigator.platform.indexOf("Win") > -1) {
				ps.destroy();
			}
			window.removeEventListener("resize", resizeFunction);
		};
	};
	//............end perfect scrollbar

	return [perfectScrollbar];
};

export default useSidebar;
