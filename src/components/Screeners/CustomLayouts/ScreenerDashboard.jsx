const ScreenerDashboard = () => {
    return (
        <div>
            {layouts?.map((nr) => {
                return (
                    <button type="button" key={nr}>
                        {nr}
                    </button>
                )
            })}
        </div>
    )
}
export default ScreenerDashboard
