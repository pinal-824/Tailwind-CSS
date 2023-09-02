import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ArrowDownOutlined } from '@ant-design/icons';
export const Tailwind = () => {
    return (
        <>

            <div className="bg-slate-900 p-2">
                <div className="container" style={{ display: "flex", justifyContent: "space-around" }}>
                    <h1 className="text-3xl text-slate-300">logo</h1>
                    {/* <GiHamburgerMenu className="text-3xl text-white" /> */}
                </div>
            </div>
            <div className="bg-slate-800">
                <div className="container" style={{ display: "flex", justifyContent: "space-around" }}>
                    <div className="p-16">
                        <h1 className="text-3xl text-white"><b>I’m a digital designer</b></h1>
                        <h1 className="text-7xl text-white"><b>Julian Mack</b></h1>
                        <p className="text-slate-300"><i><b>Image by Freepik</b></i></p><br />
                        <hr className="text-slate-300" style={{ width: "400px" }} /><br />
                        <pre><h1 className="text-white"><b>Date of Birth:</b>     Aug 25, 1988</h1></pre><br />
                        <pre><h1 className="text-white"><b>Address:</b>           Rosia Road 55, Gibraltar, UK</h1></pre><br />
                        <pre><h1 className="text-white"><b>E-mail:</b>            julian.mack@company.com</h1></pre><br />
                        <pre><h1 className="text-white"><b>Phone:</b>             +13 5266 22 345</h1></pre><br />
                        <button className="bg-orange-500  text-white p-3 hover:bg-gray-700" style={{ width: "300px", borderRadius: "10px" }}><b>DOWNLOAD CV </b></button>
                    </div>
                    <div >
                        <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c02046d2816d50cfb2bc0ef0/111.jpg" alt="person image" height="1000px" width="700px" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-700">
                <div className="container">
                    <h1 className="text-6xl text-white text-center"><b>Experiences</b></h1><br />
                    <p className="text-2xl text-slate-300 text-center"><i><b>Nunc sed blandit libero volutpat sed cras. Risus quis varius quam<br />quisque id. Semper auctor neque vitae tempus quam pellentesque.</b></i></p><br /><br />
                    <hr className="text-white content-center" /><br />
                    <div className="row text-center">
                        <div className="col-6">
                            <p className="text-white">September, 2016 – May, 2017</p>
                        </div>
                        <div className="col-6">
                            <h3 className="text-orange-400 text-2xl" style={{ textAlign: "justify" }}><b>Junior Developer</b></h3><br />
                            <p className="text-2xl text-slate-300" style={{ textAlign: "justify" }}>Sed quia consequuntur magni dolores eos quira tione<br />estera voluptatem sequi nesciunt nuncera permano<br />
                                nence of the stars from which we spring.</p><br />
                            <h3 className="text-2xl text-white" style={{ textAlign: "justify" }}><b>Lobrissa/Chicago</b></h3><br /><br />
                        </div>
                    </div>
                    <hr className="text-white content-center" /><br />
                    <div className="row text-center">
                        <div className="col-6">
                            <p className="text-white">May, 2018 – Jun, 2019</p>
                        </div>
                        <div className="col-6">
                            <h3 className="text-orange-400 text-2xl" style={{ textAlign: "justify" }}><b>Senior Developer</b></h3><br />
                            <p className="text-2xl text-slate-300" style={{ textAlign: "justify" }}>Molestie a iaculis at erat pellentesque adipiscing.<br />Porttitor eget dolor morbi non arcu risus quis varius<br />
                                quam. Odio aenean sed adipiscing diam donec. Id<br />diam maecenas ultricies mi eget mauris.</p><br />
                            <h3 className="text-2xl text-white" style={{ textAlign: "justify" }}><b>Faucibuse/Seattle</b></h3><br /><br />
                        </div>
                    </div>
                    <hr className="text-white content-center" /><br />
                    <div className="row text-center">
                        <div className="col-6">
                            <p className="text-white">Jun, 2019 – December, 2020</p>
                        </div>
                        <div className="col-6">
                            <h3 className="text-orange-400 text-2xl" style={{ textAlign: "justify" }}><b>Senior Developer</b></h3><br />
                            <p className="text-2xl text-slate-300" style={{ textAlign: "justify" }}>Etiam erat velit scelerisque in dictum non<br />consectetur. Nisl purus in mollis nunc sed id semper.<br />
                                Cras fermentum odio eu feugiat pretium nibh ipsum.<br />Tristique senectus et netus et malesuada fames.</p><br />
                            <h3 className="text-2xl text-white" style={{ textAlign: "justify" }}><b>Reesturato/New York</b></h3><br /><br />
                        </div>
                    </div>
                    <hr className="text-white content-center" /><br />
                    <div className="row text-center">
                        <div className="col-6">
                            <p className="text-white">Dec, 2020 – current</p>
                        </div>
                        <div className="col-6">
                            <h3 className="text-orange-400 text-2xl" style={{ textAlign: "justify" }}><b>CEO</b></h3><br />
                            <p className="text-2xl text-slate-300" style={{ textAlign: "justify" }}>Etiam erat velit scelerisque in dictum non<br />consectetur. Nisl purus in mollis nunc sed id semper.<br />
                                Cras fermentum odio eu feugiat pretium nibh ipsum.<br />Tristique senectus et netus et malesuada fames.</p><br />
                            <h3 className="text-2xl text-white" style={{ textAlign: "justify" }}><b>Ercussa/San Francisco</b></h3><br /><br />
                        </div>
                    </div>
                    <div className="flex justify-center"><button className="bg-orange-500 hover:!text-black  text-white p-3 hover:bg-white " style={{ width: "300px", borderRadius: "10px" }}><b>CONTACT ME</b></button></div>
                    <h1 className="text-white text-6xl text-center mt-28"><b>Portfolio</b></h1><br />
                    <p className="text-white text-2xl text-center">Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in<br />
                        cursus turpis massa tincidunt. Pellentesque habitant morbi tristique senectus et netus.</p>
                    <div className="flex justify-around mt-5">
                        <div>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8c593f782d1654b09c0aa7b3/jhjh688.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Website Design</b></h1>
                        </div>
                        <div>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/a24ad1604ec15337995a6352/g4.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Mobile Application</b></h1>
                        </div>
                        <div>
                            <img src="https://images2.alphacoders.com/124/1241930.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Corporate Design</b></h1>
                        </div>
                    </div>
                    <div className="flex justify-around mt-3 pb-5">
                        <div>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/e2e39f17cead5a36875282db/fgfg.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Mobile Application</b></h1>
                        </div>
                        <div>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/270c391596735803b0eb88f9/PSD_01.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Responsive Design</b></h1>
                        </div>
                        <div>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/75434504afed529795968963/fff.jpg" style={{ height: "300px", width: "350px" }} alt="image" />
                            <h1 className="text-2xl text-gray-500 bg-white p-3 text-center"><b>Digital Product</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-600">
                <div className="container flex justify-around">
                    <div>
                        <h1 className="text-white text-3xl pt-20"><b>About me</b></h1><br /><br />
                        <p className="text-white text-base"><b>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br />
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br />
                            proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</b></p><br /><br />
                        <p className="text-white text-base"><b>
                            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nunc<br /> lobortis mattis aliquam faucibus purus.
                            Accumsan sit amet nulla<br /> facilisi morbi tempus iaculis urna. Urna nunc id cursus metus.<br /> Consectetur a erat nam
                            at lectus urna duis convallis. Felis donec et<br /> odio pellentesque diam volutpat. Vestibulum morbi blandit cursus<br />
                            risus at ultrices mi.</b>
                        </p><br /><br />
                        <button className="bg-orange-500 text-white  p-3  hover:!text-black hover:bg-white " style={{ width: "250px", borderRadius: "10px" }}><b>CONTACT ME</b></button>
                    </div>
                    <div>
                        <div className="flex mt-28">
                            <div className="mr-20">
                                <h1 className="bg-orange-500 p-14 rounded-full w-36  text-white text-3xl"><b>97%</b></h1>
                                <p className="text-white text-center"><b>HTML5 & CSS3</b></p>
                            </div>
                            <div >
                                <h1 className="bg-orange-500 p-14 rounded-full w-36 text-white text-3xl"><b>75%</b></h1>
                                <p className="text-white text-center"><b>WEB DESIGN</b></p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="mr-20">
                                <h1 className="bg-orange-500 p-14 rounded-full w-36  text-white text-3xl"><b>80%</b></h1>
                                <p className="text-white text-center"><b>JAVA</b></p>
                            </div>
                            <div>
                                <h1 className="bg-orange-500 p-14 rounded-full w-36  text-white text-3xl"><b>55%</b></h1>
                                <p className="text-white text-center"><b>PHP</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="container">
                    <div className="flex justify-center pt-24">
                        <img className="rounded-full border-gray-400 border-8" style={{ height: "220px" }} src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/42e00f44576258d48183655f/jhjh5.jpg" alt="image" />
                    </div><br /><br />

                    <h1 className="text-center text-white text-6xl"><b>Build your website<br />in record time</b></h1><br />
                    <p className="text-center text-white text-xl">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit<br /> nullam nunc justo sagittis suscipit ultrices.</p><br /><br />
                    <div className="ml-96"><label className=" text-white " htmlFor="email">Email</label></div><br />
                    <div className="ml-96"><input className="bg-transparent" type="email" id="email" name="email" placeholder="Enter valid email address" />
                        <hr className="text-white border-2 w-3/5 p-2" />
                    </div>
                    <div className="flex justify-center ">
                        <button className="bg-orange-500 text-2xl  text-white p-3 hover:bg-gray-700" style={{ width: "600px", borderRadius: "10px" }}>SUBMIT</button>
                    </div>

                </div>
            </div>
        </>
    )
}