import React,{useEffect} from 'react'

const Events = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const sections = document.querySelectorAll('.Event');
    
        sections.forEach((section) => {
          observer.observe(section);
        });
    
        // Cleanup observer on component unmount
        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }, []);

      

  return (
    <>
        <div className='Event'>
        <div className='EventHeading'>
            Events
        </div>
        <div  className='cards-Contianer'>
        <div className="card">
            <div className="text">
                <span>PAKISTAN VETERINARY MEDICAL COUNCIL (PVMC) VISIT AT UAD</span>
                <p className="subtitle">Pakistan Veterinary Medical Council (PVMC) visited the University of Agriculture Dera Ismail Khan on 23rd August 2022.</p>
            </div>  
        </div>

        <div className="card">
            <div className="text">
                <span>UAD SIGNED MOU WITH PARC</span>
                <p className="subtitle">The University Of Agriculture D I Khan and Pakistan Agricultural Research Council have signed a Memorandum of Understanding (MoU).</p>
            </div>  
        </div>

        <div className="card">
            <div className="text">
                <span>INAUGURATION OF SOIL SCIENCES LABORATORY</span>
                <p className="subtitle">VC UAD delivered presentation on "International Soil Sciences Day" and inaugurated Soil Sciences Laboratory at Gomal University Dera Ismail Khan.</p>
            </div>  
        </div>

        <div className="card">
            <div className="text">
                <span>AC D.I.KHAN VISIT UAD</span>
                <p className="subtitle">Newly appointed Assistant Commissioners D.I.KHAN Visits The University of Agriculture D.I.Khan.</p>
            </div>  
        </div>


        <div className="card">
            <div className="text">
                <span>UAD SIGNED MOU WITH VU</span>
                <p className="subtitle">The University Of Agriculture D I Khan and Virtual University of Pakistan have signed a Memorandum of Understanding (MoU).</p>
            </div>  
        </div>
    </div>
    </div>

    


    </>
  )
}

export default Events
