import type { CodeQuestion } from '$lib/types';

const oz: CodeQuestion[] = [
  {
    id: "oz-fun-record",
    language: "Oz",
    aliases: ["oz", "oz", "mozart oz"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Erlang", "Prolog", "Mercury", "Scheme"],
    discriminators: ["fun declaration", "record construction", "case pattern", "Oz dataflow syntax"],
    explanation: "This is Oz. This snippet uses fun declaration, record construction, case pattern as recognizable fingerprints.",
    code: `fun {Label Event}
   case Event
   of paid(id:Id amount:Amount) then Id#Amount
   [] failed(reason:R) then R
   end
end`
  },
  {
    id: "oz-thread-cell",
    language: "Oz",
    aliases: ["oz", "oz", "mozart oz"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Erlang", "Prolog", "Mercury", "Scheme"],
    discriminators: ["thread keyword", "NewCell cell", "@ dereference", ":= assignment"],
    explanation: "This is Oz. This snippet uses thread keyword, NewCell cell, @ dereference as recognizable fingerprints.",
    code: `Counter = {NewCell 0}
thread
   Counter := @Counter + 1
end`
  },
  {
    id: "oz-fd-domain",
    language: "Oz",
    aliases: ["oz", "oz", "mozart oz"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Erlang", "Prolog", "Mercury", "Scheme"],
    discriminators: ["FD finite domain", "choice/dis []", "constraint operator =:", "Oz logic programming"],
    explanation: "This is Oz. This snippet uses FD finite domain, choice/dis [], constraint operator =: as recognizable fingerprints.",
    code: `declare X Y
X :: 1#9
Y :: 1#9
X + Y =: 10
{FD.distribute naive [X Y]}`
  }
];

export default oz;
