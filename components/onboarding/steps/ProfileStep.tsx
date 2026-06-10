import Header from "@/components/onboarding/Header";
import Input from "@/components/onboarding/Input";
import MiniMetric from "@/components/onboarding/MiniMetric";
import OptionCard from "@/components/onboarding/OptionCard";

type Profile = {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
};

type Touched = {
  age: boolean;
  height: boolean;
  weight: boolean;
};

type ProfileStepProps = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  touched: Touched;
  setTouched: (touched: Touched) => void;
  nameWarning: string;
  ageWarning: string;
  heightWarning: string;
  weightWarning: string;
};

export default function ProfileStep({
  profile,
  setProfile,
  touched,
  setTouched,
  nameWarning,
  ageWarning,
  heightWarning,
  weightWarning,
}: ProfileStepProps) {
  return (
    <div>
      <Header
        title="Vamos conhecer você."
        subtitle="Esses dados ajudam o Apex a criar um plano mais preciso para sua evolução."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
          <p className="text-sm font-medium text-blue-400">Perfil físico</p>

          <h3 className="mt-4 text-2xl font-bold">
            Dados que guiam sua estratégia.
          </h3>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Idade, altura e peso ajudam o Apex a estimar necessidades,
            ajustar metas e personalizar sua evolução.
          </p>

          <div className="mt-6 grid gap-3">
            <MiniMetric label="Idade" value={profile.age || "--"} suffix="anos" />
            <MiniMetric label="Altura" value={profile.height || "--"} suffix="cm" />
            <MiniMetric label="Peso" value={profile.weight || "--"} suffix="kg" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Nome"
              value={profile.name}
              onChange={(value) =>
                setProfile({
                  ...profile,
                  name: value.slice(0, 50),
                })
              }
              placeholder="Seu nome"
              warning={nameWarning}
            />

            <Input
              label="Idade"
              type="number"
              value={profile.age}
              onChange={(value) => setProfile({ ...profile, age: value })}
              placeholder="18"
              suffix="anos"
              warning={ageWarning}
              onBlur={() => setTouched({ ...touched, age: true })}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Altura"
              type="number"
              value={profile.height}
              onChange={(value) => setProfile({ ...profile, height: value })}
              placeholder="180"
              suffix="cm"
              warning={heightWarning}
              onBlur={() => setTouched({ ...touched, height: true })}
            />

            <Input
              label="Peso"
              type="number"
              value={profile.weight}
              onChange={(value) => setProfile({ ...profile, weight: value })}
              placeholder="70"
              suffix="kg"
              warning={weightWarning}
              onBlur={() => setTouched({ ...touched, weight: true })}
            />
          </div>

          <div>
            <p className="mb-3 text-sm text-zinc-400">Sexo</p>

            <div className="grid gap-4 md:grid-cols-2">
              {["Masculino", "Feminino"].map((item) => (
                <OptionCard
                  key={item}
                  label={item}
                  selected={profile.gender === item}
                  onClick={() => setProfile({ ...profile, gender: item })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}