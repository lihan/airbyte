#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

# coding: utf-8

from __future__ import annotations

import re  # noqa: F401
from datetime import date, datetime  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, validator  # noqa: F401


class StreamsListReadStreams(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    StreamsListReadStreams - a model defined in OpenAPI

        name: The name of this StreamsListReadStreams.
        url: The url of this StreamsListReadStreams.
    """

    name: str
    url: str


StreamsListReadStreams.update_forward_refs()
