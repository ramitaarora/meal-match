export default function Nav({back, search, slide, setSlide}) {
    const handleHome = () => {
        setSlide('slideOutLeft');
        setTimeout(() => {
          back()
        }, 300)
      }

      const handleSearch = () => {
        setSlide('slideOutRight');
        setTimeout(() => {
          search()
        }, 300)
      }

    return (
        <div id="navigation">

            <svg onClick={handleHome} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="black" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>

            <svg fill="#000000" version="1.1" id="Capa_1" width="30px" height="30px" viewBox="0 0 380.721 380.721" >
                <g>
                    <path d="M344.308,327.389l0.116-0.047c0,0-82.888-84.119-91.021-92.252c-5.042-1.487-34.53-14.454-35.041-38.83
		c12.583-14.418,30.882-28.268,57.907-28.541c0.046-0.023,0.186-0.035,0.256-0.035c12.223,0.331,24.562-3.724,34.38-12.304
		c0.685-0.604,2.3-2.248,2.3-2.248l67.517-85.089l-8.11-8.139l-82.597,87.448l-9.748-9.777l85.014-85.008l-7.146-7.105
		l-85.514,85.531l-8.087-8.093l85.525-85.531l-7.865-7.849l-85.525,85.52l-9.586-9.568l88.279-82.818l-7.413-7.413l-81.354,63.38
		c0,0-2.95,2.486-3.973,3.521c-11.166,11.16-15.965,26.305-14.361,40.892c-1.127,18.503-7.11,32.242-14.871,42.687
		C61.724,17.344,4.531,33.215,4.531,33.215L0,37.81c0,0,101.983,102.262,164.997,165.398c-22.11,22.134-128.7,128.724-128.7,128.724
		l0.011,0.023c-0.093,0.092-0.209,0.127-0.319,0.243c-7.616,7.622-7.587,19.961,0.012,27.571c7.604,7.61,19.979,7.61,27.565,0.023
		c0.122-0.116,0.157-0.244,0.227-0.314l0.023,0.023c0,0,106.724-106.693,128.706-128.665c11.525,11.538,19.217,19.241,20.728,20.751
		c9.341,9.389,103.383,103.43,103.383,103.43h0.116c0,0.116,0.104,0.221,0.209,0.268c7.599,7.656,20.077,7.656,27.664,0
		c7.703-7.588,7.703-20.02,0-27.664C344.529,327.504,344.424,327.458,344.308,327.389z"/>
                </g>
            </svg>

            <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>

        </div>
    )
}