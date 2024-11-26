import AmbassadorsGridOne from "../components/AmbassadorsGridOne";
import AmbassadorsGridTwo from "../components/AmbassadorGridTwo";

const Ambassadors = () => {
    return (
        <main className="cnt-PriFlexAmba">
            <AmbassadorsGridOne />
            <div className="cnt-FatherH1">
                <p className="pAmbaOne">IT&apos;S FULL READY TIME</p>
                <h1 className="h1Amba">APPLY TO BE AN<br></br> <span className="spanAmbaH1">AMBASSADORS</span></h1>
                <h2 className="h2Amba">READY TO JOIN US?</h2>
                <button className="btnAmbaAply">APLY NOW</button>
            </div>
            <section className="Cnt-FatherPerks">
                <div className="cnt-h2Perks">
                    <h2 className="h2Perks">PERKS</h2>
                </div>
                <div className="cnt-FatherPerksGrid">
                    <div className="cnt-PerksGrid">
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-calendar"></i>
                            <p className="textPerks">MONTHLY STOCK UP</p>
                        </div>
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-box-seam"></i>
                            <p className="textPerks">EXCLUSIVE MERCH</p>
                        </div>
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-lightning-charge"></i>
                            <p className="textPerks">COMPETITIONS AND PRIZES</p>
                        </div>
                        <div className="Perks-Items">
            <i className="iconPerks bi bi-instagram"></i>
                            <p className="textPerks">PRIVATE ACCESS</p>
                        </div>
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-heart-fill"></i>
                            <p className="textPerks">CLOSE COMMUNITY</p>
                        </div>
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-suitcase-lg"></i>
                            <p className="textPerks">JOB OPPORTUNITIES</p>
                        </div>
                        <div className="Perks-Items">
                            <i className="iconPerks bi bi-chat-left-text"></i>
                            <p className="textPerks">CONNECTIONS</p>
                        </div>
                    </div>
                </div>
            </section>
            < AmbassadorsGridTwo />
        </main>
    );
};

export default Ambassadors;