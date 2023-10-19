set_project("lab")
set_encodings("utf-8")
set_languages("cxxlatest")
add_rules("mode.debug", "mode.release")
add_requires("fmt")

target("cpp")
    set_kind("binary")
    add_files("*.cpp")
    add_packages("fmt")
