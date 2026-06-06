import type { CodeQuestion } from '$lib/types';

const lua: CodeQuestion[] = [
  {
    id: "lua-table-metatable",
    language: "Lua",
    aliases: ["lua"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "lua",
    confusionGroup: ["Python", "Ruby", "JavaScript", "Perl"],
    discriminators: ["local function", "tables with colon methods", "setmetatable", "pairs iterator"],
    explanation: "This is Lua. local functions, table constructors, colon method syntax, pairs, and setmetatable are Lua fingerprints.",
    code: `local UserList = {}
UserList.__index = UserList

function UserList:new(users)
  return setmetatable({ users = users }, self)
end

function UserList:active_names()
  local names = {}
  for _, user in pairs(self.users) do
    if user.active then
      table.insert(names, user.name)
    end
  end
  return names
end`,
  }
];

export default lua;
