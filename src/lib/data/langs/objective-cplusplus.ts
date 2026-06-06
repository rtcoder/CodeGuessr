import type { CodeQuestion } from '$lib/types';

const objectiveCplusplus: CodeQuestion[] = [
  {
    id: "objective-cplusplus-vector-nsarray",
    language: "Objective-C++",
    aliases: ["objective-c++", "objective-c++", "objective c++", "objc++", "objcpp"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Objective-C", "C++", "Swift", "C"],
    discriminators: ["Objective-C message send", "std::vector", "@autoreleasepool", "mixed .mm syntax"],
    explanation: "This is Objective-C++. This snippet uses Objective-C message send, std::vector, @autoreleasepool as recognizable fingerprints.",
    code: `#import <Foundation/Foundation.h>
#include <vector>

int main() {
  @autoreleasepool {
    std::vector<NSString *> names = { @"api", @"worker" };
    for (NSString *name in names) {
      NSLog(@"%@", [name uppercaseString]);
    }
  }
}`
  },
  {
    id: "objective-cplusplus-wrapper-class",
    language: "Objective-C++",
    aliases: ["objective-c++", "objective-c++", "objective c++", "objc++", "objcpp"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Objective-C", "C++", "Swift", "C"],
    discriminators: ["C++ class", "Objective-C @interface", "pointer ivar", "init method"],
    explanation: "This is Objective-C++. This snippet uses C++ class, Objective-C @interface, pointer ivar as recognizable fingerprints.",
    code: `class Counter {
public:
  void increment() { value += 1; }
  int value = 0;
};

@interface CounterBox : NSObject {
  Counter *_counter;
}
- (instancetype)initWithCounter:(Counter *)counter;
@end`
  },
  {
    id: "objective-cplusplus-lambda-block",
    language: "Objective-C++",
    aliases: ["objective-c++", "objective-c++", "objective c++", "objc++", "objcpp"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Objective-C", "C++", "Swift", "C"],
    discriminators: ["C++ lambda", "Objective-C block", "NSArray enumeration", "mixed block/lambda syntax"],
    explanation: "This is Objective-C++. This snippet uses C++ lambda, Objective-C block, NSArray enumeration as recognizable fingerprints.",
    code: `NSArray<NSNumber *> *values = @[ @1, @2, @3 ];
auto doubleValue = [](NSNumber *value) {
  return value.intValue * 2;
};

[values enumerateObjectsUsingBlock:^(NSNumber *value, NSUInteger index, BOOL *stop) {
  NSLog(@"%d", doubleValue(value));
}];`
  }
];

export default objectiveCplusplus;
