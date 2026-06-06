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
  }
];

export default objectiveC;
