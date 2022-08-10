import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-2435e811.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"m-auto w-1/2 mt-20"}"><h1 class="${"mx-4 text-3xl text-dark-blue text-center m-auto"}">Designed an developed by Cesar Velasco
	</h1></div>`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let edSize = "80%";
  return `<div class="${"flex justify-end"}"><div class="${"bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-l-full animate__animated animate__fadeInRightBig"}"><img${add_attribute("width", edSize, 0)} src="${"images/Education.png"}" alt="${"Education title"}" href="${"/"}"></div></div>
${``}`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `
<h2>${escape(y)}</h2>
${``}

${``}`;
});
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gh = "images/Githubcoin1.png";
  let ln = "images/Linkedincoin1.png";
  return `<div></div>
<div class="${"w-3/4 m-auto mt-6"}"><img class="${"h-[70px] m-auto"}" src="${"images/Socials.png"}" alt="${"Socials title"}" href="${"/"}">
	<div class="${"flex flex-row w-2/6 justify-around m-auto mt-5"}"><img class="${"h-[60px] cursor-pointer"}"${add_attribute("src", gh, 0)} alt="${"ghcoin"}" href="${"/"}">
		<img class="${"h-[60px] cursor-pointer"}"${add_attribute("src", ln, 0)} alt="${"lncoin"}" href="${"/"}"></div></div>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-2/3 m-auto"}"><div class="${"flex flex-row items-end justify-center"}"><h1 class="${"mx-4 text-5xl text-dark-blue mb-2"}">Hi! Im</h1>
		<div class="${"flex flex-row items-baseline "}"><img class="${"h-[200px] animate__animated animate__fadeInLeft"}" src="${"images/C.png"}" alt="${"C"}" href="${"/"}">
			<img class="${"h-[200px] animate__animated animate__fadeInTopLeft"}" src="${"images/E.png"}" alt="${"E"}" href="${"/"}">
			<img class="${"h-[200px] animate__animated animate__fadeInDown"}" src="${"images/S.png"}" alt="${"S"}" href="${"/"}">
			<img class="${"h-[200px] animate__animated animate__fadeInTopRight"}" src="${"images/A.png"}" alt="${"A"}" href="${"/"}">
			<img class="${"h-[200px] animate__animated animate__fadeInDown"}" src="${"images/R.png"}" alt="${"R"}" href="${"/"}"></div></div>
	<div class="${"flex flex-row items-end justify-center"}"><h1 class="${"mx-4 text-3xl text-dark-blue "}">Software engineer</h1></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Carvesco</title>`, ""}`, ""}
<div class="${"pb-10"}"><div class="${"w-full h-[700px] bg-main-grey flex"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}</div>
	<div>${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
	<div class="${"mt-10"}">${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}</div>
	<div class="${"mt-10"}">${validate_component(Education, "Education").$$render($$result, {}, {}, {})}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Routes as default
};
