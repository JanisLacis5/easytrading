import "./userdangerzone.css"

const UserDangerZone = () => {
    return (
        <div className="danger-zone">
            <div className="danger-zone-action">
                <div>
                    <h4>Change password</h4>
                    <p>
                        Wen you choose to change your passsword, this change is
                        inreverasble and unless there is a problem with your
                        existing password this change is not recomended
                    </p>
                </div>
                <div>
                    <button type="button">Change Password</button>
                </div>
            </div>
            <div className="danger-zone-action">
                <div>
                    <h4>Delete profile</h4>
                    <p>
                        Profile delete option is inreversable and all data from
                        your profile will be deleted from our databases
                    </p>
                </div>
                <div>
                    <button type="button">Delete Profile</button>
                </div>
            </div>
        </div>
    )
}
export default UserDangerZone
