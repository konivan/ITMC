import React from 'react';
import PasswordChange from './PasswordChange';
import PersonalData from './PersonalData';

const ProfileSettings = () => {
    return (
        <div>
            <PersonalData />
            <div>
                <PasswordChange />
                <div>Действия с аккаунтом</div>
            </div>
        </div>
    );
};

export default ProfileSettings;