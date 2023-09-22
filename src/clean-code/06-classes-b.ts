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
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        person: PersonProps;
        user: UserProps;
        settings: SettingsProps;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({ person, user, settings }: UserSettingsProps) {
            this.person = new Person(person);
            this.user = new User(user);
            this.settings = new Settings(settings);
        }
    }

    const userSettings = new UserSettings({
        person: {
            name: 'Hange Zoe',
            gender: 'NB',
            birthDate: new Date('1984-01-01'),
        },
        user: {
            email: '',
            role: '',
        },
        settings: {
            workingDirectory: '',
            lastOpenFolder: '',
        },
    });

    console.log({ userSettings });
})();
