import "./addtrade.css"

const FileReader = () => {
    return (
        <section className="addtrade-filereader">
            <h2>File info</h2>
            <form>
                <div>
                    <label htmlFor="file">File:</label>
                    <input type="file" name="file" id="file" />
                </div>
                <div>
                    <label htmlFor="platform">
                        Please provide from where you downloaded your file:
                    </label>
                    <select name="platform" id="platform">
                        <option value="">Choose platform</option>
                        <option value="tradingview">Tradingview</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ext">File extention:</label>
                    <select name="ext" id="ext">
                        <option value="">Choose extention</option>
                        <option value="csv">.csv</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Read</button>
                </div>
            </form>
        </section>
    )
}
export default FileReader
