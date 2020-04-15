# -*- coding: utf-8 -*-

from setuptools import setup, find_packages
import NLG

setup(
    name="NLG",
    version="0.0.1",
    description="",
    url="",
    author="",
    author_email="",
    license="",
    packages=find_packages(exclude=[]),
    include_package_data=True,
    cmdclass={"package": NLG},
    zip_safe=False,
    install_requires=["CoreNLG",],
)
