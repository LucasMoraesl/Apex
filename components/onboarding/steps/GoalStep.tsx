import GoalCard from "@/components/onboarding/GoalCard";

type Goal = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type GoalStepProps = {
  goal: string;
  setGoal: (goal: string) => void;
  goals: Goal[];
};

export default function GoalStep({
  goal,
  setGoal,
  goals,
}: GoalStepProps) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Qual é seu objetivo principal?
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Escolha o foco que vai guiar sua estratégia no Apex.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {goals.map((item, index) => (
          <GoalCard
            key={item.title}
            title={item.title}
            description={item.description}
            Icon={item.icon}
            selected={goal === item.title}
            onClick={() => setGoal(item.title)}
            className={index === goals.length - 1 ? "md:col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
}