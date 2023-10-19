#include <cstdint>
#include <fmt/format.h>
using i32 = int32_t;

auto pair = [](auto a, auto b) { return [=](auto m) { return m ? a : b; }; };
using pair_t = decltype(pair(1, 1));
auto head = [](auto a) { return a(0); };
auto tail = [](auto a) { return a(1); };
template <typename T1, typename T2> struct is_same_type {
  operator bool() { return false; }
};
template <typename T1> struct is_same_type<T1, T1> {
  operator bool() { return true; }
};
constexpr auto is_pair = [](auto p) {
  return is_same_type<pair_t, decltype(p)>();
};
const std::string format_pair(const pair_t p) {
  // I can't do anymore... It's awful to do sicp lab with cpp.
    return fmt::format("[{}, {}]", is_pair(p) ? format_pair(head(p)), );
};
void print_pair(const pair_t p) {}