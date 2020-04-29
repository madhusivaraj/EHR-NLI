# -*- coding: utf-8 -*-

from setuptools import setup, find_packages
import CORENLG

setup(
    name="CORENLG",
    version="0.0.1",
    description="",
    url="",
    author="",
    author_email="",
    license="",
    packages=find_packages(exclude=[]),
    include_package_data=True,
    cmdclass={"package": CORENLG},
    zip_safe=False,
    install_requires=["CoreNLG",],
)
