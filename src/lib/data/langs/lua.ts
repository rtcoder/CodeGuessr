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
  },
  {
    id: "lua-coroutine-yield",
    language: "Lua",
    aliases: ["lua"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "lua",
    confusionGroup: ["Python","Ruby","JavaScript","Perl"],
    discriminators: ["coroutine.create","coroutine.yield","anonymous function","repeat-style resume workflow"],
    explanation: "This is Lua. This snippet uses a distinct Lua idiom: coroutine.create, coroutine.yield, anonymous function.",
    code: `local worker = coroutine.create(function(limit)
  for i = 1, limit do
    coroutine.yield(i * i)
  end
end)

local ok, value = coroutine.resume(worker, 3)`,
  },
  {
    id: "lua-module-return-table",
    language: "Lua",
    aliases: ["lua"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "lua",
    confusionGroup: ["Python","Ruby","JavaScript","Perl"],
    discriminators: ["module table return","local table literal","colon method definition","self parameter sugar"],
    explanation: "This is Lua. This snippet uses a distinct Lua idiom: module table return, local table literal, colon method definition.",
    code: `local Queue = {}
Queue.__index = Queue

function Queue:new()
  return setmetatable({items = {}}, self)
end

function Queue:push(item)
  table.insert(self.items, item)
end

return Queue`,
  }
];

export default lua;
