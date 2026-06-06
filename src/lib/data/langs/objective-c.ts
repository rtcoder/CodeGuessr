import type { CodeQuestion } from '$lib/types';

const objectiveC: CodeQuestion[] = [
  {
    id: "objective-c-message-syntax",
    language: "Objective-C",
    aliases: ["objective-c", "objective c", "objc"],
    difficulty: "hard",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "objectivec",
    confusionGroup: ["Swift", "C", "C++", "Objective-C++"],
    discriminators: ["@interface declaration", "message sends with brackets", "NSString * pointer type", "@autoreleasepool"],
    explanation: "This is Objective-C. @interface, NSString *, bracketed message sends, and @autoreleasepool distinguish it from C and Swift.",
    code: `@interface UserFormatter : NSObject
- (NSString *)labelForUser:(User *)user;
@end

@implementation UserFormatter
- (NSString *)labelForUser:(User *)user {
    return [NSString stringWithFormat:@"%@ <%@>", user.name, user.email];
}
@end

int main(void) {
    @autoreleasepool {
        NSLog(@"%@", [[UserFormatter new] labelForUser:user]);
    }
}`,
  },
  {
    id: "objective-c-category",
    language: "Objective-C",
    aliases: ["objective-c","objective c","objc"],
    difficulty: "hard",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "objectivec",
    confusionGroup: ["Swift","C","C++","Objective-C++"],
    discriminators: ["@interface category","method declaration with colon","NSString return type","@implementation category"],
    explanation: "This is Objective-C. This snippet uses a distinct Objective-C idiom: @interface category, method declaration with colon, NSString return type.",
    code: `@interface NSString (Slug)
- (NSString *)slugValue;
@end

@implementation NSString (Slug)
- (NSString *)slugValue {
    return [self lowercaseString];
}
@end`,
  },
  {
    id: "objective-c-blocks",
    language: "Objective-C",
    aliases: ["objective-c","objective c","objc"],
    difficulty: "hard",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "objectivec",
    confusionGroup: ["Swift","C","C++","Objective-C++"],
    discriminators: ["block type syntax","NSArray enumerateObjectsUsingBlock","BOOL pointer stop","message sends"],
    explanation: "This is Objective-C. This snippet uses a distinct Objective-C idiom: block type syntax, NSArray enumerateObjectsUsingBlock, BOOL pointer stop.",
    code: `NSArray *names = @[@"api", @"worker"];
[names enumerateObjectsUsingBlock:^(NSString *name, NSUInteger idx, BOOL *stop) {
    NSLog(@"%lu:%@", (unsigned long)idx, name);
}];`,
  }
];

export default objectiveC;
