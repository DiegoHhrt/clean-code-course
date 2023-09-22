(() => {
    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F' | 'NB' | 'O';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        personProps: PersonProps;
    }

    class User extends Person {
        public email: string;
        public role: string;

        public lastAccess: Date;

        constructor({ email, role, personProps }: UserProps) {
            super(personProps);
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        userProps: UserProps;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder, userProps }: UserSettingsProps) {
            super(userProps);
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const settingsProps: UserSettingsProps = {
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        userProps: {
            email: 'diegohhrt@gmail.com',
            role: 'Admin',
            personProps: {
                name: 'Hange Zoe',
                birthDate: new Date('1990-01-01'),
                gender: 'NB',
            },
        },
    };

    const userSettings = new UserSettings(settingsProps);

    console.log({ userSettings });
})();
